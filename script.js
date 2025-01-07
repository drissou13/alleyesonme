document.addEventListener('mousemove', (event) => {
  const eyes = document.querySelectorAll('.eye');
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  eyes.forEach(eye => {
    const rect = eye.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
    const pupil = eye.querySelector('.pupil');
    const pupilMovement = 30; // Limite de mouvement de la pupille

    const x = Math.cos(angle) * pupilMovement;
    const y = Math.sin(angle) * pupilMovement;

    pupil.style.transform = `translate(${x}px, ${y}px)`;
  });
});
