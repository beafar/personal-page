document.addEventListener("DOMContentLoaded", function () {
    // Confetti settings
    const duration = 5 * 1000; // 5 seconds
    const end = Date.now() + duration;

    (function frame() {
        // Get screen width
        const screenWidth = window.innerWidth;

        // Define base velocity
        const baseVelocity = 80;

        // Adjust velocity based on screen width
        const adjustedVelocity = baseVelocity * (screenWidth / 1920);

        // Launch confetti
        confetti({
            particleCount: 5,
            angle: 315,
            spread: 120,
            origin: { x: 0, y: 0 },
            startVelocity: adjustedVelocity,
        });
        confetti({
            particleCount: 5,
            angle: 225,
            spread: 120,
            origin: { x: 1, y: 0 },
            startVelocity: adjustedVelocity,
        });

        // Continue the animation
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
});