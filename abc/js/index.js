document.getElementById('history').addEventListener('click', function(e) {
  for (let i = 0; i < 10; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    document.body.appendChild(bubble);

    const x = e.clientX + (Math.random() - 0.5) * 100;
    const y = e.clientY + (Math.random() - 0.5) * 20;
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;

    setTimeout(() => bubble.remove(), 1500);
  }
});
