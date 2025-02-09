document.addEventListener('DOMContentLoaded', function() {
    const WORKER_URL = 'https://raw.githubusercontent.com/st-11-web/public-links/main/fs-dates-webflow.json?v='+ new Date().getTime();
    async function updateDynamicText() {
        try {
            const response = await fetch(WORKER_URL);
            if (!response.ok) throw new Error('API request failed');
            const data = await response.json();
            const textContent = data.dynamic_text_alg_reg;
            const element = document.getElementById('dynamic-date-text-1');
            if (element) {
                element.textContent = textContent;
            } else {
                console.error('Element with ID dynamic-date-text-1 not found');
            }
        } catch (error) {
            console.error('Error fetching dynamic text:', error);
            console.error('Error details:', error.message);
        }
    }
    updateDynamicText();
});