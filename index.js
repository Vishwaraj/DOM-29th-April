function countText() {
    let textLength = document.querySelector('#text-area').value.length;
    let textCount = document.querySelector('#chars');
    textCount.innerText = textLength;
}
