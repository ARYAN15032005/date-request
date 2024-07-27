const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const message = document.getElementById('message');

yesButton.addEventListener('click', () => {
    message.textContent = 'AWWWW...I knew it!!You are sooo sweet babee!!!Meet me at the park street, Kolkata! Mwaahhhh ^ ^';
    message.style.display = 'block';
});

noButton.addEventListener('mouseover', () => {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const noButtonRect = noButton.getBoundingClientRect();

    let newLeft = Math.random() * (containerRect.width - noButtonRect.width);
    let newTop = Math.random() * (containerRect.height - noButtonRect.height);

    noButton.style.left = `${newLeft}px`;
    noButton.style.top = `${newTop}px`;
});
