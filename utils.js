/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called 
 */
class Beat {
    constructor(audioSrc){
        this.audio=new Audio(audioSrc);
    }
    play=()=>{
        this.audio.currentTime=0; //allows audio to be reset e/t it is pressed
        this.audio.play();
    }
}



/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, keyCode){
        this.color=color;
        this.keyCode=keyCode;
        this.element=document.getElementById(keyCode);
        this.setButtonColorInHTML();
        this.setTransitionEndListener();
       
    }

    /**
     * Set the button color based on color specified
     */
    setButtonColorInHTML = () => {
        this.element.style.borderColor=this.color;
    }

    setTransitionEndListener=()=>{
        this.element.addEventListener("transitionend",()=>{
            this.deselect();
        })
        
    }

    /**
     * Select function to set the background color and boxShadow
     */
    select = () => {
        this.element.style.boxShadow=`0px 0px 17px 0px ${this.color}`;
        this.element.style.backgroundColor=this.color;
    }

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
        this.element.style.boxShadow="none";
        this.element.style.backgroundColor="transparent";
    }
}