import { PUBLIC_PHOTOBOOTH_URL } from '$env/static/public';


export const load = async ({fetch}) => {
	const fetchRequests = async () => {
		const res = await fetch(`${PUBLIC_PHOTOBOOTH_URL}/get_requests`, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await res.json();
		console.log(data.requests);
    return data.requests;
	};

	return {
    requests: await fetchRequests(),
  };
};
