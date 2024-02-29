import { j as json } from './index-DyoisQP2.js';

async function POST({ cookies }) {
  await cookies.set("token", "", { path: "/", expires: /* @__PURE__ */ new Date(0) });
  console.log("Admin Logout...");
  return json({ success: true, message: "Logged out", staus: 200 });
}

export { POST };
//# sourceMappingURL=_server-B2IOmBrM.js.map
