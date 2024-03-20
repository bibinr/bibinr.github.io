// document.getElementById('revealBtn').addEventListener('click', function() {
//     this.style.display = 'none'; // Hide the button after click

//     // Trigger confetti explosion
//     confetti({
//         particleCount: 100,
//         spread: 70,
//         origin: { y: 0.6 },
//         colors: ['#add8e6', '#87CEEB', '#1E90FF'], // Shades of blue
//     });

//     setTimeout(() => {
//         document.body.innerHTML += '<h1 style="text-align: center; color: #1E90FF;">It\'s a Boy!</h1>';
//     }, 1500); // Delay message appearance to focus on confetti
// });


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

    // Wait for 3 seconds before popping the balloon
    setTimeout(() => {
        balloon.style.background = 'url("confetti.png")'; // Placeholder for confetti effect
        balloon.innerHTML = '<h1 style="text-align: center; color: white; padding-top: 30px;">It\'s a Boy!</h1>';
        // Adjust styles for the popped balloon
        balloon.style.borderRadius = '0';
        balloon.style.width = '200px';
        balloon.style.height = '200px';
        tringle.style.display = 'none';
        string.style.display = 'none';
    }, 3000); // Delay to simulate anticipation
});
