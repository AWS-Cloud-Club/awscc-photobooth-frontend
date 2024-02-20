import { PUBLIC_PHOTOBOOTH_URL } from '$env/static/public';

export const load = async ({fetch}) => {
	const fetchRequests = async () => {
		const res = await fetch(`${PUBLIC_PHOTOBOOTH_URL}/get_requests`);
		const data = await res.json();
		console.log(data);
    return data
	};

	return {
    requests: await fetchRequests(),
  };
};
