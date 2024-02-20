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
}