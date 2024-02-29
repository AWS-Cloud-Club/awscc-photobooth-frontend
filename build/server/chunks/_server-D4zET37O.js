import { P as PUBLIC_PHOTOBOOTH_URL } from './public-DUCl8VFn.js';

async function GET({ fetch, cookies }) {
  const token = cookies.get("token");
  const response = await fetch(`${PUBLIC_PHOTOBOOTH_URL}/get_requests`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    }
  });
  return response;
}

export { GET };
//# sourceMappingURL=_server-D4zET37O.js.map
