document.getElementById('revealBtn').addEventListener('click', function() {
    this.style.display = 'none'; // Hide the reveal button

    // Create balloon element and add to the body
    let balloonContainer = document.createElement('div');
    balloonContainer.className = 'balloon-container';
    document.body.appendChild(balloonContainer);

    let balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloonContainer.appendChild(balloon);

    // Add tringle (the bottom part of the balloon)
    let tringle = document.createElement('div');
    tringle.className = 'tringle';
    balloonContainer.appendChild(tringle);

    // Add string to the balloon
    let string = document.createElement('div');
    string.className = 'string';
    balloonContainer.appendChild(string);

    // Listener to pop the balloon
    balloon.addEventListener('click', function() {
        // Trigger confetti
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#add8e6', '#87CEEB', '#1E90FF'], // Shades of blue
        });

        // Remove balloon and show the message
        balloonContainer.innerHTML = '<h1>It\'s a Boy!</h1>';
    });
});
