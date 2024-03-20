document.getElementById('revealBtn').addEventListener('click', function() {
    this.remove(); // Remove the reveal button

    // Function to generate a random number within a range
    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    // Balloon colors
    const colors = ['#FF69B4', '#87CEEB']; // Pink and Blue

    for (let i = 0; i < 5; i++) { // Create 5 balloons
        let balloonContainer = document.createElement('div');
        balloonContainer.className = 'balloon-container';
        balloonContainer.style.left = `${randomInRange(10, 90)}vw`;
        balloonContainer.style.top = `${randomInRange(10, 90)}vh`;

        let balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; // Assign random color
        balloonContainer.appendChild(balloon);

        let tringle = document.createElement('div');
        tringle.className = 'tringle';
        balloonContainer.appendChild(tringle);

        let string = document.createElement('div');
        string.className = 'string';
        balloonContainer.appendChild(string);

        document.body.appendChild(balloonContainer);

        // Randomize floating direction and speed
        let keyframes = [
            { transform: `translate(0, 0)` },
            { transform: `translate(${randomInRange(-100, 100)}vw, ${randomInRange(-100, 100)}vh)` }
        ];
        let options = {
            duration: randomInRange(5000, 10000), // between 5 and 10 seconds
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out'
        };
        balloonContainer.animate(keyframes, options);
    }
});
