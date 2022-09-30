document.querySelectorAll(".drum").forEach(item =>{
    item.addEventListener("click",function(){


      let buttonInnerHTML = this.innerHTML;
      
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);

    })
})

addEventListener("keydown", (e) => {

  makeSound(e.key);
  buttonAnimation(e.key);

})


function makeSound(key) {
  switch (key) {

    case "w":  
    let audio = new Audio("sounds/tom-1.mp3");
    audio.play()
    break;
    case "a":  
    let audio1 = new Audio("sounds/tom-2.mp3");
    audio1.play()
    break;
    case "s":  
    let audio2 = new Audio("sounds/tom-3.mp3");
    audio2.play()
    break;
    case "d":  
    let audio3 = new Audio("sounds/tom-4.mp3");
    audio3.play()
    break;
    case "j":  
    let audio4 = new Audio("sounds/snare.mp3");
    audio4.play()
    break;
    case "k":  
    let audio5 = new Audio("sounds/crash.mp3");
    audio5.play()
    break;
    case "l":  
    let audio6 = new Audio("sounds/kick-bass.mp3");
    audio6.play()
    break;
    default: 
  }
}



function buttonAnimation(currentKey){

  let activeBtn = document.querySelector("." + currentKey);
  activeBtn.classList.add("pressed");
  
  setTimeout( () =>{
    activeBtn.classList.remove("pressed");
  },100);

}
