document.getElementById('revealBtn').addEventListener('click', function() {
    this.remove(); // Remove the reveal button

    const colors = ['#FF69B4', '#87CEEB']; // Pink and blue colors for balloons

    // Function to generate a random number within a range
    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    for (let i = 0; i < 10; i++) { // Create 10 balloons
        let balloonContainer = document.createElement('div');
        balloonContainer.className = 'balloon-container';
        balloonContainer.style.left = `${randomInRange(10, 90)}vw`;
        balloonContainer.style.top = `${randomInRange(10, 90)}vh`;

        let balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.backgroundColor = colors[i % colors.length]; // Alternate colors
        balloonContainer.appendChild(balloon);

        let tringle = document.createElement('div');
        tringle.className = 'tringle';
        tringle.style.borderTopColor = colors[i % colors.length]; // Match tringle color with balloon
        balloonContainer.appendChild(tringle);

        let string = document.createElement('div');
        string.className = 'string';
        balloonContainer.appendChild(string);

        document.body.appendChild(balloonContainer);

        // Balloon pop event listener
        balloonContainer.addEventListener('click', function() {
            // Trigger confetti explosion
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#87CEEB'], // Blue confetti for "It's a Boy!"
            });

            // Remove balloon after popping
            this.remove();

            // Optional: Show "It's a Boy!" message
            if (!document.querySelector('.reveal-message')) {
                let message = document.createElement('h1');
                message.className = 'reveal-message';
                message.textContent = "It's a Boy!";
                message.style.position = 'fixed';
                message.style.top = '50%';
                message.style.left = '50%';
                message.style.transform = 'translate(-50%, -50%)';
                message.style.color = '#87CEEB';
                message.style.fontSize = '2rem';
                document.body.appendChild(message);
            }
        });
    }
});
