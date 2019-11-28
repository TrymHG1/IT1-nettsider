// javascript
const slides = document.querySelector(".slides");
let marg = 0;

document.onclick = function(klikk) {
    if(klikk.clientX > innerWidth / 2) {
        if(marg > -400) {
            marg = marg - 100;
        } else {
            slides.animate([
                {transform: "translateX(20px)"},
                {transform: "translateX(0)"},
                {transform: "translateX(15px)"},
                {transform: "translateX(0)"}
            ], {
                duration: 200
            });
        }

    } else {
        if(marg < 0) {
            marg = marg + 100;
        } else {
            slides.animate([
                {transform: "translateX(-20px)"},
                {transform: "translateX(0)"},
                {transform: "translateX(-15px)"},
                {transform: "translateX(0)"}
            ], {
                duration: 200
            });
        }
    }

    slides.style.marginLeft = marg + "%";
}
