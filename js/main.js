let isOpen = false;


function ask() {

    // toggle isOpen variable (reverse the value of isOpen)
    isOpen = !isOpen
    const input = document.getElementById('input');

    const questionText = document.getElementById('question')
    const value = input.value
    questionText.innerHTML = value;
    input.value = '';
    // if isOpen is true display will be none other wise inline
    input.style.display = isOpen ? "none" : "inline";

    let randomNum = Math.floor(Math.random() * 20 + 1)
    document.getElementById("img").src = `images/magic8ball_${randomNum}.png`;

}
