document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Remove all existing error messages
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(message => message.remove());
        
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        // Validate required fields
        inputs.forEach(input => {
            input.classList.remove('error');
            
            if (!input.value.trim()) {
                isValid = false;
                showError(input, '必須項目です');
            }
        });
        
        // Validate email format
        const email = form.querySelector('#email');
        if (email.value && !isValidEmail(email.value)) {
            isValid = false;
            showError(email, '正しいメールアドレスを入力してください');
        }
        
        // Validate phone number format (if provided)
        const phone = form.querySelector('#phone');
        if (phone.value && !isValidPhone(phone.value)) {
            isValid = false;
            showError(phone, '正しい電話番号を入力してください');
        }
        
        // Validate inquiry type selection
        const inquiryType = form.querySelector('input[name="inquiry_type"]:checked');
        if (!inquiryType) {
            isValid = false;
            const firstRadio = form.querySelector('input[name="inquiry_type"]');
            showError(firstRadio, 'お問い合わせ種類を選択してください');
        }
        
        // Validate privacy policy checkbox
        const privacy = form.querySelector('input[name="privacy"]');
        if (!privacy.checked) {
            isValid = false;
            showError(privacy, 'プライバシーポリシーに同意してください');
        }
        
        if (isValid) {
            // Here you would typically send the form data to your server
            alert('お問い合わせありがとうございます。\n内容を確認の上、担当者よりご連絡させていただきます。');
            form.reset();
        }
    });
    
    // Helper functions
    function showError(element, message) {
        element.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        element.parentNode.appendChild(errorDiv);
    }
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function isValidPhone(phone) {
        // Allow numbers, hyphens, and spaces
        const re = /^[\d\s-]+$/;
        return re.test(phone);
    }
    
    // Real-time validation
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            const errorMessage = this.parentNode.querySelector('.error-message');
            if (errorMessage) {
                errorMessage.remove();
            }
            this.classList.remove('error');
            
            if (!this.value.trim()) {
                showError(this, '必須項目です');
            }
        });
    });
    
    // Email real-time validation
    const emailInput = form.querySelector('#email');
    emailInput.addEventListener('blur', function() {
        const errorMessage = this.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
        this.classList.remove('error');
        
        if (!this.value.trim()) {
            showError(this, '必須項目です');
        } else if (!isValidEmail(this.value)) {
            showError(this, '正しいメールアドレスを入力してください');
        }
    });
});