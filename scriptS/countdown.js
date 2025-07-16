// Tournament Countdown
document.addEventListener('DOMContentLoaded', function() {
    const countdowns = document.querySelectorAll('.countdown');
    
    countdowns.forEach(countdown => {
        const dateString = countdown.getAttribute('data-date');
        const tournamentDate = new Date(dateString).getTime();
        
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = tournamentDate - now;
            
            if (distance < 0) {
                countdown.innerHTML = '<div class="countdown-ended">Tournament Started!</div>';
                return;
            }
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            
            countdown.querySelector('.days').textContent = days.toString().padStart(2, '0');
            countdown.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
            countdown.querySelector('.minutes').textContent = minutes.toString().padStart(2, '0');
        }
        
        updateCountdown();
        setInterval(updateCountdown, 60000);
    });
});