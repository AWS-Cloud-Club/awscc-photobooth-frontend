import { PUBLIC_PHOTOBOOTH_URL } from '$env/static/public';

export const load = async ({ fetch }) => {
	const fetchRequests = async () => {
		const token =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtaWciLCJleHAiOjE3MDg0ODc2MDN9.CPdkRAhZo_IvfdVIsOu9plksqSPP2VWKz_RpWHKTAMw';
		const res = await fetch(`${PUBLIC_PHOTOBOOTH_URL}/hello`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `${token}`
			},
			credentials: 'include'
		});
    console.log(res);
	};

	return {
		requests: await fetchRequests()
	};
};
