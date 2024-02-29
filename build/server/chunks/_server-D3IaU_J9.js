import { P as PUBLIC_PHOTOBOOTH_URL } from './public-DUCl8VFn.js';
import { j as json } from './index-DyoisQP2.js';

async function POST({ request, cookies, fetch }) {
  const data = await request.json();
  const response = await fetch(`${PUBLIC_PHOTOBOOTH_URL}/login`, {
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const responseData = await response.json();
  cookies.set("token", responseData.token, { path: "/", sameSite: "None", secure: true });
  console.log("Admin Login...");
  return json({ message: responseData.message });
}

export { POST };
//# sourceMappingURL=_server-D3IaU_J9.js.map
