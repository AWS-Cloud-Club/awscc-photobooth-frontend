import { P as PUBLIC_PHOTOBOOTH_URL } from './public-DUCl8VFn.js';

async function POST({ request, fetch }) {
  const data = await request.json();
  console.log(data);
  const response = await fetch(`${PUBLIC_PHOTOBOOTH_URL}/create_request`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  console.log("Create Request...", data);
  return response;
}

export { POST };
//# sourceMappingURL=_server-BvtUSOlJ.js.map
