export interface CustomerDetails {
    name: string;
    email: string;
    mobile: string;
    message: string;
}

export const sendEmail = async (details: CustomerDetails): Promise<void> => {
    try {
        const response = await fetch('https://<YOUR_CLOUD_FUNCTION_URL>/sendEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(details)
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error sending email:', errorText);
            throw new Error('Failed to send email');
        }

        console.log('Email sent successfully');
    } catch (error) {
        console.error('sendEmail error:', error);
        throw error;
    }
};
