let imgIndex = 1;
displayImg(imgIndex);

function addToIndex(n) {
    displayImg(imgIndex += n) ;
}

function goToIndex(n) {
    displayImg(imgIndex = n);
}

function displayImg(n) {
    let i;
    let imagesArr = document.getElementsByClassName("slide-image");
    let markers = document.getElementsByClassName("slide-marker");
    if (n > imagesArr.length) { imgIndex = 1}
    if (n < 1) { imgIndex = imagesArr.length}
    for (i=0; i < imagesArr.length; i++) {
        imagesArr[i].style.display = "none";
        markers[i].className.replace(" active","");
    }
    imagesArr[imgIndex - 1].style.display = "block";
    markers[imgIndex -1].className += " active";
}