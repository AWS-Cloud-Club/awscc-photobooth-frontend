import { P as PUBLIC_PHOTOBOOTH_URL } from './public-DUCl8VFn.js';
import { j as json } from './index-DyoisQP2.js';

async function POST({ request, cookies, fetch }) {
  const data = await request.json();
  const response = await fetch(`${PUBLIC_PHOTOBOOTH_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const responseData = await response.json();
  cookies.set("token", responseData.token, { path: "/" });
  console.log("Admin Login...");
  console.log(responseData.message);
  return json({ message: responseData.message });
}

export { POST };
//# sourceMappingURL=_server-9QkFCgpj.js.map
