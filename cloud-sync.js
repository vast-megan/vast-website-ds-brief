// cloud-sync.js — reusable GitHub Gist sync for internal HTML tools
//
// Usage in any project:
//   const sync = new GistSync({ appId: 'my-tool', getData, setData });
//   await sync.save();   // push current state to cloud
//   await sync.load();   // pull latest state from cloud
//
// First-time setup: call sync.configure({ userName, token, gistId })
// isReady() returns false if setup hasn't been done yet

class GistSync {
  constructor({ appId, getData, setData }) {
    this.appId   = appId;
    this.getData = getData;
    this.setData = setData;
    this._keys = {
      token:  'gist-sync-token',
      user:   'gist-sync-user',
      gistId: `gist-sync-id-${appId}`
    };
  }

  get token()    { return localStorage.getItem(this._keys.token); }
  get userName() { return localStorage.getItem(this._keys.user); }
  get gistId()   { return localStorage.getItem(this._keys.gistId); }

  configure({ userName, token, gistId }) {
    if (token)    localStorage.setItem(this._keys.token,  token.trim());
    if (userName) localStorage.setItem(this._keys.user,   userName.trim());
    if (gistId)   localStorage.setItem(this._keys.gistId, gistId.trim());
    else if (gistId === '')  localStorage.removeItem(this._keys.gistId);
  }

  isReady() {
    return !!(this.token && this.userName);
  }

  async save() {
    if (!this.isReady()) return { ok: false, error: 'not-configured' };

    const payload = {
      savedBy: this.userName,
      savedAt: new Date().toISOString(),
      ...this.getData()
    };

    const fileName = `${this.appId}-sync.json`;
    const body     = { files: { [fileName]: { content: JSON.stringify(payload, null, 2) } } };
    const isNew    = !this.gistId;

    if (isNew) {
      body.description = `${this.appId} cloud sync`;
      body.public      = false;
    }

    try {
      const res = await fetch(
        isNew ? 'https://api.github.com/gists' : `https://api.github.com/gists/${this.gistId}`,
        {
          method:  isNew ? 'POST' : 'PATCH',
          headers: {
            'Authorization':        `Bearer ${this.token}`,
            'Content-Type':         'application/json',
            'X-GitHub-Api-Version': '2022-11-28'
          },
          body: JSON.stringify(body)
        }
      );

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || `GitHub error ${res.status}`);
      }

      const data = await res.json();
      if (isNew) localStorage.setItem(this._keys.gistId, data.id);

      return { ok: true, savedBy: this.userName, gistId: data.id, isNew };
    } catch (err) {
      return { ok: false, error: err.message };
    }
  }

  generateInviteLink() {
    if (!this.token || !this.gistId) return null;
    const encoded = btoa(JSON.stringify({ t: this.token, g: this.gistId }));
    return `${window.location.origin}${window.location.pathname}#invite=${encoded}`;
  }

  static parseInviteFromHash() {
    const hash = window.location.hash;
    if (!hash.startsWith('#invite=')) return null;
    try {
      const data = JSON.parse(atob(hash.slice(8)));
      if (!data.t || !data.g) return null;
      return { token: data.t, gistId: data.g };
    } catch {
      return null;
    }
  }

  async load() {
    if (!this.isReady()) return { ok: false, error: 'not-configured' };
    if (!this.gistId)    return { ok: false, error: 'no-gist' };

    try {
      const res = await fetch(`https://api.github.com/gists/${this.gistId}`, {
        headers: {
          'Authorization':        `Bearer ${this.token}`,
          'X-GitHub-Api-Version': '2022-11-28'
        }
      });

      if (!res.ok) throw new Error(`GitHub error ${res.status}`);

      const data    = await res.json();
      const content = data.files[`${this.appId}-sync.json`]?.content;
      if (!content) throw new Error('No sync data found in this Gist');

      const payload = JSON.parse(content);
      this.setData(payload);
      return { ok: true, savedBy: payload.savedBy, savedAt: payload.savedAt };
    } catch (err) {
      return { ok: false, error: err.message };
    }
  }
}
