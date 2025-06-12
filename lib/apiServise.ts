export async function sendMail(data: { destMail: string, druidName: string}) {

    const res = await fetch("https://panoramix-back-production.up.railway.app/api/mail", {
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