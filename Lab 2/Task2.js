<script>
        function validateForm(event) {
            event.preventDefault(); 
            clearErrorMessages();

           
            const fullName = document.getElementById('name').value;
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const gender = document.querySelector('input[name="gender"]:checked');
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const state = document.getElementById('state').value;
            const agreement = document.getElementById('agreement').checked;

            
            const alphanumericRegex = /^[a-zA-Z0-9]+$/;
            const passwordRegex = /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9!@#$%^&*]{6,10}$/;
            const phoneRegex = /^\d{10}$/;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            
            if (!fullName) {
                showError('full-name-error', 'Full Name is required.');
            }

            
            if (!username || !alphanumericRegex.test(username)) {
                showError('username-error', 'Username must be alphanumeric.');
            }

            if (!password || !passwordRegex.test(password)) {
                showError('password-error', 'Password must be alphanumeric with 6 to 10 characters.');
            }

            if (password !== confirmPassword) {
                showError('confirm-password-error', 'Passwords do not match.');
            }

            
            if (!gender) {
                showError('gender-error', 'Please select a gender.');
            }

            
            if (!phone || !phoneRegex.test(phone)) {
                showError('phone-error', 'Phone No must be a 10-digit number.');
            }

            
            if (!email || !emailRegex.test(email)) {
                showError('email-error', 'Please enter a valid email address.');
            }

            
            if (!state) {
                showError('state-error', 'Please select a state.');
            }

          
            if (!agreement) {
                showError('agreement-error', 'Please agree to the terms and conditions.');
            }

            
            if (fullName && username && password && confirmPassword && gender && phone && email && state && agreement) {
                
                window.location.href = 'Task.html';
            }
        }

        function showError(elementId, errorMessage) {
            const errorElement = document.getElementById(elementId);
            errorElement.textContent = '*' + errorMessage;
        }

        function clearErrorMessages() {
            const errorElements = document.getElementsByClassName('error-message');
            for (let i = 0; i < errorElements.length; i++) {
                errorElements[i].textContent = '';
            }
        }
    </script>
