document.getElementById('revealBtn').addEventListener('click', function() {
    this.style.display = 'none'; // Hide the button after click

    // Trigger confetti explosion
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#add8e6', '#87CEEB', '#1E90FF'], // Shades of blue
    });

    setTimeout(() => {
        document.body.innerHTML += '<h1 style="text-align: center; color: #1E90FF;">It\'s a Boy!</h1>';
    }, 1500); // Delay message appearance to focus on confetti
});

