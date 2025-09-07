export async function saveUserDetails(details: any) {
    const response = await fetch('/api/save-details', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(details)
    });
    if (!response.ok) throw new Error('Failed to save details');
    return response.json();
}