export async function sendMail(data: { destMail: string, druidName: string}) {
    
    const API_URL: string | undefined = process.env.API_URL;

    if (!API_URL) {
        throw new Error("API_URL n'est pas définie");
    }

    const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error(`Error POST : `);
    }

    return res.json();
}