//references to the elemetns
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2")
const paper3 = document.querySelector("#p3")

//event listeners
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

//more variables
let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function openBook(){

}

function closeBook(){

}

function goNextPage(){
  if(currentLocation < maxLocation){
    switch(currentLocation){
      case 1:
        openBook();
        paper1.classList.add("flipped");
        paper1.computedStyleMap.zIndex = 1;
        break;
      case 2:
        paper2.classList.add("flipped");
        paper2.computedStyleMap.zIndex = 2;
        break;
      case 3:
        paper3.classList.add("flipped");
        paper3.computedStyleMap.zIndex = 3;
        break;
      default:
        throw new Error("unkown state");
    }
  }
  currentLocation++;
}

function goNextPage(){

}