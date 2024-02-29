import { r as redirect } from './index-DyoisQP2.js';

const load = async ({ locals }) => {
  if (!locals.authenticated) {
    throw redirect(303, "/login");
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C1zNjy4C.js')).default;
const server_id = "src/routes/admin/+page.server.js";
const imports = ["_app/immutable/nodes/3.DW8Hqb06.js","_app/immutable/chunks/scheduler.CAVAXCl_.js","_app/immutable/chunks/index.BAiBiDUC.js","_app/immutable/chunks/Refetch.BTZw9wZZ.js","_app/immutable/chunks/spread.DX_ZYZbm.js","_app/immutable/chunks/index.CWKK34Q8.js","_app/immutable/chunks/index.0ifH2NZK.js"];
const stylesheets = ["_app/immutable/assets/3.d2RPDB-e.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=3-B9mwHGdf.js.map
