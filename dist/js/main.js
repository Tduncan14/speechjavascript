
// Init speechSynth Api
const synth = window.speechSynthesis;

// grabbing all the dom elements

const textForm = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch =document.querySelector('#pitch');
const pitchValue = document.querySelector('#pitch-value');



// Init voices array

let voices = [];

const getVoices =()=>{
    voices = synth.getVoices();

    // Loop through voices and create an option for each one

    voices.forEach(voice =>{
  // Create an option element

    const option = document.createElement('option');

    
    // now we want to fill the option with the voice and language
    option.textContent = voice.name +'('+ voice.lang +')';

    // set needed option attributes
 

    option.setAttribute('data-lang',voice.lang);
    option.setAttribute('data-name',voice.name);

    voiceSelect.appendChild(option);


    
    });

    //console.log(voices);
}

getVoices();
if(synth.onvoiceschanged !== undefined){
    synth.onvoiceschanged = getVoices;
}


// speak

const speak = () =>{
    // check if speaking
   if(synth.speaking){
       console.error('already speaking');
       return;
   }
   if(textInput.value !==''){
       // Get speak text

       const speakText = new SpeechSynthesisUtterance(textInput.value);
   }

}