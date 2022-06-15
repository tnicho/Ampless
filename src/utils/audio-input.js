let context;
let overdrive;
let delay;

  
export function audioStart (overdriveInput, delayInput){
  context = new AudioContext({latencyHint: 'interactive'})

  setupContext(overdriveInput, delayInput)
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


export function handleSetupChange(overdriveInput, delayInput){
  overdrive.curve = makeDistortionCurve((overdriveInput*10))
  delay.delayTime.value = (0.1*delayInput)
}

async function setupContext(overdriveInput, delayInput){
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
    delayOutput.connect(context.destination)
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