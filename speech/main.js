const synth = window.speechSynthesis;

// init voices array

const textForm = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const pitch = document.querySelector('#pitch');

let voices = [];

const getVoices =  () => {
  voices = synth.getVoices();
//   loop through voices and create an option for each one
 voices.forEach(voice => {
   const option = document.createElement('option')

   option.textContent = voice.name + '('+ voice.lang +')';

   option.setAttribute('data-lang', voice.lang);
   option.setAttribute('data-name', voice.name);
   voiceSelect.appendChild(option);
 });
};

getVoices();

if(synth.getVoiceschanged !== undefined){
    synth.getVoiceschanged = getVoices;
}


const speak =() => {
  if(synth.speaking){
    console.error('already speakking...');
    return;


  }
  if(textInput.value !==''){
    const speakText = new SpeechSynthesisUtterance(textInput.value);
    speakText.onend = (e) => {
      console.log('done speakking...')
    }

    speakText.onend = e => (
      console.log('done speakng')
    );

    const selectedVoice = voiceSelect.selecteOptions[0]
    .getAttribute('data-name');


    // loop trough voice

    voice.forEach(voice => {
      if(voice.nmme === selectedVoice){
        speakText.voice = voice
      }
    });

    // pitch

    speakText,rate = rate.value;
    speakText.pitch = pitch.value;

    // speak

    synth.speak(speakText);
  }

};

// EVENTLISTNER

// tex form submit
textForm.addEventListener('submit', e => {
  e.preventDefault();
speak();
textInput.blur();
});

// voice select change
voiceSelect.addEventListener('change', e => {
  rateValue.textContent = rate.value
});




