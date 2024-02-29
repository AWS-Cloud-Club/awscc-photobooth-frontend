import { r as redirect } from './index-DyoisQP2.js';
import { t as themes } from './index3-BmkJ2vFQ.js';

const handle = async ({ resolve, event }) => {
  event.locals.message = "AWSCC-PUP Photobooth is now running...";
  console.log(event.locals.message);
  if (event.url.pathname.startsWith("/api")) {
    if (event.request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*"
        }
      });
    }
  }
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
    if (event.url.pathname.startsWith("/api")) {
      response2.headers.append("Access-Control-Allow-Origin", `*`);
    }
    return response2;
  }
  const response = await resolve(event, {
    transformPageChunk: ({ html }) => {
      return html.replace('data-theme=""', `data-theme="${theme}"`);
    }
  });
  if (event.url.pathname.startsWith("/api")) {
    const newHeaders = new Headers(response.headers);
    newHeaders.append("Access-Control-Allow-Origin", "*");
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    });
  }
  return response;
};

export { handle };
//# sourceMappingURL=hooks.server-AUz4MGpE.js.map
