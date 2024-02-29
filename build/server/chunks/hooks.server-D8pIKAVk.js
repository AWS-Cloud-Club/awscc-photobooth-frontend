import { r as redirect } from './index-DyoisQP2.js';
import { t as themes } from './index3-BmkJ2vFQ.js';

const handle = async ({ resolve, event }) => {
  event.locals.message = "AWSCC-PUP Photobooth is now running...";
  console.log(event.locals.message);
  const theme = event.cookies.get("theme");
  const token = event.cookies.get("token");
  if (token !== void 0) {
    event.locals.authenticated = true;
  } else {
    event.locals.authenticated = false;
  }
  if (event.url.pathname.startsWith("/admin") && !event.locals.authenticated) {
    throw redirect(303, "/login");
  }
  if (!theme || !themes.includes(theme)) {
    const response2 = await resolve(event);
    return response2;
  }
  const response = await resolve(event, {
    transformPageChunk: ({ html }) => {
      return html.replace('data-theme=""', `data-theme="${theme}"`);
    }
  });
  return response;
};

export { handle };
//# sourceMappingURL=hooks.server-D8pIKAVk.js.map
