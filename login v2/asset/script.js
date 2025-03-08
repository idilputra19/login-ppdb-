// Script untuk toggle password visibility
document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.querySelector('.input-icon i');
    const password = document.querySelector('#password');
    
    togglePassword.addEventListener('click', function() {
        // Toggle tipe input
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        
        // Toggle icon
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
});