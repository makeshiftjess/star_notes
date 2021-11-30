// PARALLAX BG
(function () {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let x = `${_depth2}, ${_depth1} `;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();

// CLICK FOR MORE INFO
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");

const oneStar = document.getElementById("one-star");
const twoStar = document.getElementById("two-star");
const threeStar = document.getElementById("three-star");
const fourStar = document.getElementById("four-star");

const content1 = document.getElementById("content-1");
const content2 = document.getElementById("content-2");
const content3 = document.getElementById("content-3");
const content4 = document.getElementById("content-4");

const subtitle = document.getElementById("subtitle");

const close = document.getElementById("close");

one.onclick = (e) => {
    if (content1.style.display == "block") {
        content1.style.display = "none";
        oneStar.src = "img/star-icon-1.png";
        close.style.display = "none";
        subtitle.style.display = "block";
    } else {
        oneStar.src = "img/star-icon-2.png";
        twoStar.src = "img/star-icon-1.png";
        threeStar.src = "img/star-icon-1.png";
        fourStar.src = "img/star-icon-1.png";
        content1.style.display = "block";
        content2.style.display = "none";
        content3.style.display = "none";
        content4.style.display = "none";
        close.style.display = "block";
        subtitle.style.display = "none";
    }
}

two.onclick = (e) => {
    if (content2.style.display == "block") {
        content2.style.display = "none";
        twoStar.src = "img/star-icon-1.png";
        close.style.display = "none";
        subtitle.style.display = "block";
    } else {
        oneStar.src = "img/star-icon-1.png";
        twoStar.src = "img/star-icon-2.png";
        threeStar.src = "img/star-icon-1.png";
        fourStar.src = "img/star-icon-1.png";
        content1.style.display = "none";
        content2.style.display = "block";
        content3.style.display = "none";
        content4.style.display = "none";
        close.style.display = "block";
        subtitle.style.display = "none";
    }
}

three.onclick = (e) => {
    if (content3.style.display == "block") {
        content3.style.display = "none";
        threeStar.src = "img/star-icon-1.png";
        close.style.display = "none";
        subtitle.style.display = "block";
    } else {
        oneStar.src = "img/star-icon-1.png";
        twoStar.src = "img/star-icon-1.png";
        threeStar.src = "img/star-icon-2.png";
        fourStar.src = "img/star-icon-1.png";
        content1.style.display = "none";
        content2.style.display = "none";
        content3.style.display = "block";
        content4.style.display = "none";
        close.style.display = "block";
        subtitle.style.display = "none";
    }
}

four.onclick = (e) => {
    if (content4.style.display == "block") {
        content4.style.display = "none";
        fourStar.src = "img/star-icon-1.png";
        close.style.display = "none";
        subtitle.style.display = "block";
    } else {
        oneStar.src = "img/star-icon-1.png";
        twoStar.src = "img/star-icon-1.png";
        threeStar.src = "img/star-icon-1.png";
        fourStar.src = "img/star-icon-2.png";
        content1.style.display = "none";
        content2.style.display = "none";
        content3.style.display = "none";
        content4.style.display = "block";
        close.style.display = "block";
        subtitle.style.display = "none";
    }
}

close.onclick = (e) => {
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    oneStar.src = "img/star-icon-1.png";
    twoStar.src = "img/star-icon-1.png";
    threeStar.src = "img/star-icon-1.png";
    fourStar.src = "img/star-icon-1.png";
    close.style.display = "none";
    subtitle.style.display = "block";
}