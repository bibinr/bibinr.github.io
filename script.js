document.getElementById('revealBtn').addEventListener('click', function() {
    this.remove(); // Remove the button after click

    // Create balloon with string
    let balloonContainer = document.createElement('div');
    balloonContainer.className = 'balloon-container';
    document.body.appendChild(balloonContainer);

    let balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloonContainer.appendChild(balloon);

    let tringle = document.createElement('div');
    tringle.className = 'tringle';
    balloonContainer.appendChild(tringle);

    let string = document.createElement('div');
    string.className = 'string';
    balloonContainer.appendChild(string);

    // Balloon floating around the screen
    balloonContainer.style.animation = 'floatAround 10s linear infinite';
    @keyframes floatAround {
        from { transform: translate(0, 0); }
        to { transform: translate(100vw, 100vh); }
    }

    // Burst balloon on click
    balloon.addEventListener('click', function() {
        // Trigger slow-motion confetti
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#add8e6', '#87CEEB', '#1E90FF'],
            scalar: 1.5, // Make confetti larger
            startVelocity: 30, // Slow motion effect
            ticks: 200, // Longer-lasting confetti
        });

        setTimeout(() => {
            balloonContainer.innerHTML = '<h1>It\'s a Boy!</h1>'; // Replace the balloon with the message
        }, 1500); // Delay to show slow-motion confetti before revealing the message
    });
});
