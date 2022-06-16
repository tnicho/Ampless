
let context;
let overdrive;
let delay;
let gainBoost;
let reverb;

export function handleSetupChange(overdriveInput, delayInput, gainInput){
  overdrive.curve = makeDistortionCurve((overdriveInput*10))
  delay.delayTime.value = (0.1*delayInput)
  gainBoost.gain.value = (1+ 0.4*gainInput)
}

function getInput(){
  return navigator.mediaDevices.getUserMedia({
    audio: {
      echoCancellation: false,
      autoGainControl: false,
      noiseSuppression: false,
      latency: 0
    }
  })
}

export function audioStart (overdriveInput, delayInput, gainInput){
  context = new AudioContext({latencyHint: 'interactive'})

  setupContext(overdriveInput, delayInput, gainInput)
  console.log(context)
}

export function audioStop (){
  context.close()
  console.log(context)
}

function makeDistortionCurve(amount) {
  const k = typeof amount === 'number' ? amount : 50,
    n_samples = 44100,
    curve = new Float32Array(n_samples),
    deg = Math.PI / 180;
    let i = 0;
    let x;
  for ( ; i < n_samples; ++i ) {
    x = i * 2 / n_samples - 1;
    curve[i] = ( 3 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
  }
  return curve;
};

async function createReverb() {
  let convolver = context.createConvolver();
  console.log("convolver " , convolver)
  // load impulse response from file
  let response     = await fetch('./LargeLongEchoHall.wav');
  console.log("response " , response)
  let arraybuffer  = await response.arrayBuffer();
  console.log("arraybuffer" , arraybuffer)
  convolver.buffer = await context.decodeAudioData(arraybuffer);
  return convolver;
}



async function setupContext(overdriveInput, delayInput, gainInput){
  const input = await getInput()
  if (context.state === 'suspended'){
    await context.resume()
  }

  const source = context.createMediaStreamSource(input)
//------------------OverDrive-----------------
  const overdriveOutput = context.createGain()
  overdrive = context.createWaveShaper()
    source.connect(overdrive)
    overdrive.curve = makeDistortionCurve((overdriveInput*10))
    overdrive.overSample = '4x'
    overdrive.connect(overdriveOutput)

//------------------Delay-----------------
  const delayOutput = context.createGain()

    delay = context.createDelay(1)
    const filter = context.createBiquadFilter()
    const feedback = context.createGain()
    const delayGain = context.createGain()
  
  
    filter.frequency.value = 3200
    delay.delayTime.value = (0.1*delayInput)
    feedback.gain.value = 0.5
    delayGain.gain.value = 0.3
  
    overdriveOutput.connect(filter)
    filter.connect(delay)
    delay.connect(feedback)
    feedback.connect(delay)
    feedback.connect(delayGain)
    delayGain.connect(delayOutput)
    overdriveOutput.connect(delayOutput)
    


//-------------Gain----------------
  gainBoost = context.createGain()
  delayOutput.connect(gainBoost)
  gainBoost.gain.value = (1 + (0.4*gainInput) )


//-------------Reverb-------------
// const reverb = context.createConvolver();
// await fetch('src/utils/assets/LargeLongEchoHall.wav')
//   .then(response => response.arrayBuffer())
//   .then(data => {
//     return context.decodeAudioData(data, buffer => {
//       reverb.buffer = buffer;
//     });
//   });
  reverb = await createReverb();

  gainBoost.connect(reverb)


  //---------Output---------------
  //gainBoost.connect(context.destination)
  reverb.connect(context.destination)
}