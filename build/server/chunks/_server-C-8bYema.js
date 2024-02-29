import { P as PUBLIC_PHOTOBOOTH_URL } from './public-DUCl8VFn.js';

async function POST({ request, fetch, cookies }) {
  const requestId = await request.json();
  const token = cookies.get("token");
  const response = await fetch(`${PUBLIC_PHOTOBOOTH_URL}/delete_request`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    },
    body: JSON.stringify(requestId)
  });
  console.log("Admin Delete Request...", requestId);
  return response;
}

export { POST };
//# sourceMappingURL=_server-C-8bYema.js.map
