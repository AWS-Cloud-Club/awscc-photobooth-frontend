import { PUBLIC_PHOTOBOOTH_URL } from "$env/static/public";

export async function createRequest(payload:any) {
    try {
        console.log("Creating Request");
        const response = await fetch (`${PUBLIC_PHOTOBOOTH_URL}/create_request`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        console.log("Response", response);
    } catch (err) {
        console.error(err);
    }
};

export async function sendRequest(data: any) {
	try {
		console.log('Sending Request');

		data.files.append('request_id', data.request_id); // Append the request_id to the formData object

		const response = await fetch(`${PUBLIC_PHOTOBOOTH_URL}/upload`, {
			method: 'POST',
			body: data.files // Pass the formData object directly as the body
		});

		console.log('Response', response);
	} catch (err) {
		console.error(err);
	}
}