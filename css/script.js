// Apri pop-up
function openPaypal(buttonId) {
    const popup = document.getElementById('paypal-popup');
    const container = document.getElementById('paypal-container-popup');

    container.innerHTML = ''; // svuota contenitore precedente

    // Assicurati che PayPal SDK sia pronto
    if (typeof paypal !== 'undefined') {
        paypal.HostedButtons({
            hostedButtonId: buttonId
        }).render('#paypal-container-popup');
    } else {
        console.error("PayPal SDK non ancora pronto!");
    }

    popup.classList.remove('hidden');
}

// Chiudi pop-up
function closePaypal() {
    document.getElementById('paypal-popup').classList.add('hidden');
}

// Chiudi se clicchi fuori dal contenitore
document.getElementById('paypal-popup').addEventListener('click', function(e) {
    if (e.target.id === 'paypal-popup') closePaypal();
});