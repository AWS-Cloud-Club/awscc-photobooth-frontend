import { PHOTOBOOTH_URL } from '$env/static/private';

export const load = async () => {
	const fetchRequests = async () => {
		const res = await fetch(`${PHOTOBOOTH_URL}/get_requests`);
		const data = await res.json();
		console.log(data);
    return data
	};

	return {
    requests: await fetchRequests(),
  };
};
