const firebaseConfig = {
    databaseURL: "https://snipx-752dc-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('newsletterForm');
const emailInput = document.getElementById('emailInput');
const statusElement = document.getElementById('subscriptionStatus');
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const email = emailInput.value.trim();
    
    submitButton.disabled = true;
    submitButton.textContent = 'Subscribing...';
    
    try {
    const snapshot = await database.ref('newsletter-subscribers').orderByChild('email').equalTo(email).once('value');
    
        if (snapshot.exists()) {
            showStatus('You are already subscribed!', 'warning');
        }
        else {
            const newSubscriptionRef = database.ref('newsletter-subscribers').push();
        
            await newSubscriptionRef.set({
            email: email,
            timestamp: Date.now()
            });
        
            showStatus('Thank you for subscribing!', 'success');
            emailInput.value = '';
        }
    } 
    catch (error) {
        console.error('Subscription error:', error);
        showStatus('Error subscribing. Please try again.', 'error');
    } 
    finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Subscribe';
    }
});

function showStatus(message, type) {
    statusElement.textContent = message;
    statusElement.style.display = 'block';
    
    switch (type) {
        case 'success':
            statusElement.style.color = '#a1ff14';
            break;
        case 'error':
            statusElement.style.color = '#ff3333';
            break;
        case 'warning':
            statusElement.style.color = '#ffd700';
            break;
        default:
            statusElement.style.color = '#ffffff';
    }
}});