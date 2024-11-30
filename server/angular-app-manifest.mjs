
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/teas"
  },
  {
    "renderMode": 2,
    "route": "/brewing"
  }
],
  assets: new Map([
['index.csr.html', {size: 2375, hash: 'afa05e1866796728f2071c2ae9e773a5edf670371d795cfc33017a144530c38b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1124, hash: '02ef99b5d9a55cfab3b5ef805648c4d5030caf40cee7e6a7fc4f24122f89b7cb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['teas/index.html', {size: 2903, hash: '55f5eb9a4553e9a18312831a33bff408043c5e9b7f3c84581eea420edf4632ed', text: () => import('./assets-chunks/teas_index_html.mjs').then(m => m.default)}], 
['index.html', {size: 21644, hash: '9ac304a0e42e4a6373ab7f1133b4dd6eee5c443063b743d46f1f2a35790a1837', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['brewing/index.html', {size: 4513, hash: '15311f6b8408df7d3d963ad5ed911d41f218f1a7966df7ff0776311fb665bcfc', text: () => import('./assets-chunks/brewing_index_html.mjs').then(m => m.default)}], 
['styles-7TJN7IX5.css', {size: 9447, hash: 'rhKbdZHsSZw', text: () => import('./assets-chunks/styles-7TJN7IX5_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
