console.log('TechCon 2024 website loaded');
// Form validation for registration
document.addEventListener('DOMContentLoaded', function() {
    const regForm = document.getElementById('registration-form');
    if (regForm) {
        regForm.addEventListener('submit', function(e) {
            const email = document.getElementById('email').value;
            if (!email.includes('@')) {
                e.preventDefault();
                alert('Please enter a valid email address');
            }
        });
    }
});
