document.addEventListener("DOMContentLoaded", function () {
    // Confetti settings
    const duration = 5 * 1000; // 5 seconds
    const end = Date.now() + duration;

    (function frame() {
        // Launch confetti
        confetti({
        particleCount: 10,
        angle: 45,
        spread: 120,
        origin: { x: 0 },
        startVelocity: 80,
        });
        confetti({
        particleCount: 5,
        angle: 135,
        spread: 120,
        origin: { x: 1 },
        startVelocity: 80,
        });

        // Continue the confetti effect
        if (Date.now() < end) {
        requestAnimationFrame(frame);
        }
    })();
});