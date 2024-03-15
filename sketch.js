
let highFilter = new Tone.Filter(5000, "highpass"); //highpass, lowpass, bandpass, etc.
let distort = new Tone.Distortion(0.9);
let distort2 = new Tone.Distortion(0.6);
let lowPass = new Tone.Filter(500 ,"lowpass");
let pingPong = new Tone.PingPongDelay(0.1, 0.3);


let noise = new Tone.Noise("brown"); //pink, brown, or white
let noiseFilter = new Tone.Filter(500, "lowpass");

let fm = new Tone.FMSynth();
let fmNote = 150; 
let ping2 = new Tone.FMSynth();

let crusher = new Tone.BitCrusher(4);

let cheby = new Tone.Chebyshev(1).toDestination();

let chorus = new Tone.Chorus(4, 2.5, 0.5);

let freeverb = new Tone.Freeverb();

const loop = new Tone.Loop((time) => {
	// triggered every eighth note.
	fm.triggerAttackRelease(fmNote, 0.1);
}, 2).start(0);

let osc = new Tone.Oscillator(1000, "sine");

const signal = new Tone.Signal({
	value: "C4",
	units: "frequency"
});


//^The above is for experimentation
//-----------------------------------------------------



let img;
let showImage = false;

///FINAL SOUND EFFECT MODIFIERS
function preload()
{
  synth = new Tone.DuoSynth({
    oscillator: {
      type: "saw"
    },
    envelope: {
      attack: 0.2,
      decay: 0.1,
      sustain: 0.3,
      release:0.5
    }
  });

  synth.connect(distort);
  distort.connect(pingPong);
  pingPong.connect(crusher);
  crusher.toDestination();

  img = loadImage('assets/ufo.webp');
}


function mousePressed()
{
  synth.triggerAttackRelease(fmNote,1);
  showImage = true;
}

function setup() {



  createCanvas(512, 512);

  //SLIDERS FOR EXPERIMENTATION

  // fill("black");
  // stroke("black");
  // crushSlider = createSlider(1,16, 16, 1);
  // crushSlider.position(100,200);
  // crushSlider.mouseMoved(() => {crusher.bits.value = crushSlider.value()});
  

  // distortionSlider = createSlider(0,1, 0, 0.05);
  // distortionSlider.position(100,250);
  // distortionSlider.mouseMoved(() => {distort.distortion = distortionSlider.value()});

  // pingPongSlider = createSlider(0,1, 0, 0.1);
  // pingPongSlider.position(100,300);
  // pingPongSlider.mouseMoved(() => {pingPong.delayTime.value = pingPongSlider.value()});

  // chebySlider = createSlider(1,50, 1, 1);
  // chebySlider.position(100,350);
  // chebySlider.mouseMoved(() => {cheby.order = chebySlider.value()});

  // chorusSlider = createSlider(0,1, 0, 0.05);
  // chorusSlider.position(100,150);
  // chorusSlider.mouseMoved(() => {chorus.depth = chorusSlider.value()});

  // freeverbSlider = createSlider(500,10000, 500, 500);
  // freeverbSlider.position(100,100);
  // freeverbSlider.mouseMoved(() => {freeverb.dampening = freeverbSlider.value()});

  // fmNoteSlider = createSlider(100,5000, 100, 50);
  // fmNoteSlider.position(100,25);
  // fmNoteSlider.mouseMoved(() => {fmNote = fmNoteSlider.value()});
}

function draw() {
  background(220);
  if (mouseIsPressed ===true)
  {
    image(img,0,0,512,512);
  } else if (mouseIsPressed === false)
  {
    background (240);
    textAlign(CENTER);
    textSize(25);
    text ('PRESS MOUSE', width/2, height/2);
  }
  

  //SLIDER LABELS FOR EXPERIMENTATION
  
  // text("crush: " + crusher.bits.value,100,225);
  // text("freeverb: " + freeverb.dampening,100,125);
  // text("chorus: " + chorus.depth,100,175);
  // text("pingPong: " + pingPong.delayTime.value,100,325);
  // text("distortion: " + distort.distortion,100,275);
  // text("cheby: " + cheby.order,100,375);
  // text("note: " + fmNote,100,50);
}
