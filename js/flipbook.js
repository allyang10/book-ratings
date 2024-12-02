// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const img1 = document.querySelector("#cover-img");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 2;
let maxLocation = numOfPapers + 1;

function openBook() {
    const screenWidth = window.innerWidth
    //for desktop styles
    if(screenWidth <= 600){
      book.style.transform = "translateX(50%)";
      prevBtn.style.transform = "translateX(-55px)";
      nextBtn.style.transform = "translateX(55px)";
    }
    if(screenWidth > 600 && screenWidth < 900){
      book.style.transform = "translateX(50%)";
      prevBtn.style.transform = "translateX(-130px)";
      nextBtn.style.transform = "translateX(130px)";
    }
    else if (screenWidth >= 900){
      book.style.transform = "translateX(50%)";
      prevBtn.style.transform = "translateX(-200px)";
      nextBtn.style.transform = "translateX(200px)";
    }
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
              
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                closeBook(false);
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 4;
                break;
            case 3:
                openBook();
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 1;
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
}