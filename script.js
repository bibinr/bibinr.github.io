document.getElementById('revealBtn').addEventListener('click', function() {
    this.style.display = 'none'; // Hide the button after click

    // Create balloon element
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

    // Balloon pop on click
    balloonContainer.addEventListener('click', () => {
        if (!balloon.classList.contains('popped')) {
            balloon.classList.add('popped'); // Prevent multiple pops

            // Change the balloon to display the message and confetti
            balloon.innerHTML = '<h1>It\'s a Boy!</h1>';
            balloon.style.backgroundColor = 'transparent'; // Make the balloon "pop"
            tringle.style.display = 'none';
            string.style.display = 'none';

            // Trigger confetti explosion
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#add8e6', '#87CEEB', '#1E90FF'], // Shades of blue
            });
        }
    });
});

