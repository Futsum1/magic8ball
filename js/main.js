let isOpen = false;

function ask() {
    isOpen = !isOpen
    const input = document.getElementById('input');

    const questionText = document.getElementById('question')
    const value = input.value
    questionText.innerHTML = value;
    input.value = '';
    input.style.display = isOpen ? "none" : "inline";

    let randomNum = Math.floor(Math.random() * 20 + 1)
    document.getElementById("img").src = `images/magic8ball_${randomNum}.png`;

}
