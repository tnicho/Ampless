
let context;
let overdrive;
let delayNode;
let delay;
let gainBoost;
let reverb;

export function handleSetupChange(overdriveInput, overdriveOn, delayInput, delayOn, gainBoostInput, gainBoostOn, reverbOn){
  if(overdriveOn) overdrive.curve = makeDistortionCurve((overdriveInput*10))
  if(delayOn) delay.delayTime.value = (0.1*delayInput)
  if (gainBoostOn)gainBoost.gain.value = (1+ 0.4*gainBoostInput)
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

export function audioStart (overdriveInput, overdriveOn, delayInput, delayOn, gainBoostInput, gainBoostOn, reverbOn){
  context = new AudioContext({latencyHint: 'interactive'})

  setupContext(overdriveInput, overdriveOn, delayInput, delayOn, gainBoostInput, gainBoostOn, reverbOn)
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
  let response     = await fetch('./LargeLongEchoHall.wav');
  let arraybuffer  = await response.arrayBuffer();
  convolver.buffer = await context.decodeAudioData(arraybuffer);
  return convolver;
}

function makeGainBoost(gainBoostInput){
  let tempgainBoost = context.createGain()
  tempgainBoost.gain.value = (1 + (0.4*gainBoostInput) )
  return tempgainBoost
}

function makeOverdrive(overdriveInput){
  let tempOverdrive = context.createWaveShaper()
  tempOverdrive.curve = makeDistortionCurve((overdriveInput*10))
  tempOverdrive.overSample = '4x'
  return tempOverdrive
}

function makeDelay(previousNode, delayInput){
  let delayOutput = context.createGain()

  delay = context.createDelay(1)
  let filter = context.createBiquadFilter()
  let feedback = context.createGain()
  let delayGain = context.createGain()

  filter.frequency.value = 3200
  delay.delayTime.value = (0.1*delayInput)
  feedback.gain.value = 0.5
  delayGain.gain.value = 0.3

  previousNode.connect(filter)
  filter.connect(delay)
  delay.connect(feedback)
  feedback.connect(delay)
  feedback.connect(delayGain)
  delayGain.connect(delayOutput)
  previousNode.connect(delayOutput)
  return delayOutput
}



async function setupContext(overdriveInput, overdriveOn, delayInput, delayOn, gainBoostInput, gainBoostOn, reverbOn){
  const input = await getInput()
  if (context.state === 'suspended'){
    await context.resume()
  }

  const source = context.createMediaStreamSource(input)
//------------------OverDrive-----------------
    if(overdriveOn){
      overdrive = makeOverdrive(overdriveInput)
    }else{
      overdrive = context.createGain()
    }
    
    
    //------------------Delay-----------------
  if(delayOn){
    delayNode = makeDelay(overdrive, delayInput)
    
  }else{
    delayNode = context.createGain()
    overdrive.connect(delayNode)
  }
 
  
  //-------------Gain----------------
  
  if (gainBoostOn){
    gainBoost = makeGainBoost(gainBoostInput)
  }else{
    gainBoost = context.createGain()
  }
    
//-------------Reverb-------------

if (reverbOn){
  reverb = await createReverb();
}else{
  reverb = context.createGain()
}


  //---------Output---------------
  source.connect(overdrive)
  delayNode.connect(gainBoost)
  gainBoost.connect(reverb)
  reverb.connect(context.destination)
}