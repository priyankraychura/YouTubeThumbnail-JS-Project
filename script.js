const urlField = document.querySelector('.field input'),
    previewArea = document.querySelector('.preview-area'),
    imgtag = previewArea.querySelector('.thumbnail'),
    downloadBtn = document.querySelector('.download-btn');

urlField.onkeyup = () => {
    let imgUrl = urlField.value; // Getting user entered value
    previewArea.classList.add('active');

    if (imgUrl.indexOf("https://www.youtube.com/watch?v=") != -1) { // if entered value is yt video url
        // Splitting yt video url from v= so we can get only video id
        let vidId = imgUrl.split("v=")[1].substring(0, 11);
        // Passing entered url video id inside ty thumbnail url
        let ytThumbUrl = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;
        imgtag.src = ytThumbUrl;
    } else if (imgUrl.indexOf("https://youtu.be/") != -1) { // If video url is looke like this
        // Splitting yt video url from be/ so we can get only video id
        let vidId = imgUrl.split("be/")[1].substring(0, 11);
        // Passing entered url video id inside ty thumbnail url
        let ytThumbUrl = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;
        imgtag.src = ytThumbUrl;
    } else if (imgUrl.match(/\.(jpe?g|png|gif|bmp|webp)$/i)) { // If entered value is other image file url
        // Passing user entered url inside img src
        imgtag.src = imgUrl;
    } else {
        imgtag.src = "";
        previewArea.classList.remove('active');
    }
}


downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();  // Prevent from submiting

    downloadBtn.innerText = 'Opening in new Tab....';
    let url = imgtag.src;

    window.open(url, '_blank');

    downloadBtn.innerText = 'Opened in new Tab!!! if not click again';
});