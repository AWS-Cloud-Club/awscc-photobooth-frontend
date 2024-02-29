const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BVFpqMx-.js","app":"_app/immutable/entry/app.QU7COZiK.js","imports":["_app/immutable/entry/start.BVFpqMx-.js","_app/immutable/chunks/entry.CUxknxLk.js","_app/immutable/chunks/scheduler.CAVAXCl_.js","_app/immutable/chunks/index.CWKK34Q8.js","_app/immutable/entry/app.QU7COZiK.js","_app/immutable/chunks/scheduler.CAVAXCl_.js","_app/immutable/chunks/index.BAiBiDUC.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-sCVr-9X7.js')),
			__memo(() => import('./chunks/1-CHwkUimY.js')),
			__memo(() => import('./chunks/2-Bgv8C_vz.js')),
			__memo(() => import('./chunks/3-B9mwHGdf.js')),
			__memo(() => import('./chunks/4-_rCBcLir.js')),
			__memo(() => import('./chunks/5-p5FOWjbn.js')),
			__memo(() => import('./chunks/6-DbLnHiMC.js')),
			__memo(() => import('./chunks/7-iV0mmzs4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/completeRequest",
				pattern: /^\/api\/completeRequest\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-CaYQk1FB.js'))
			},
			{
				id: "/api/createRequest",
				pattern: /^\/api\/createRequest\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-BvtUSOlJ.js'))
			},
			{
				id: "/api/deleteRequest",
				pattern: /^\/api\/deleteRequest\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-C-8bYema.js'))
			},
			{
				id: "/api/getRequests",
				pattern: /^\/api\/getRequests\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-D4zET37O.js'))
			},
			{
				id: "/api/login",
				pattern: /^\/api\/login\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-9QkFCgpj.js'))
			},
			{
				id: "/api/logout",
				pattern: /^\/api\/logout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-B2IOmBrM.js'))
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/register/review",
				pattern: /^\/register\/review\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/register/review/complete",
				pattern: /^\/register\/review\/complete\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
