let context;

  
export function audioStart (){
  context = new AudioContext({latencyHint: 'interactive'})

  setupContext(context)
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

async function setupContext(){
  const input = await getInput()
  if (context.state === 'suspended'){
    await context.resume()
  }

  const source = context.createMediaStreamSource(input)


  const overdriveOutput = context.createGain()
  //if (Overdrive >0)

  const overdrive = context.createWaveShaper()
  source.connect(overdrive)
  overdrive.curve = makeDistortionCurve(400)
  overdrive.overSample = '4x'
  overdrive.connect(overdriveOutput)


  const delayOutput = context.createGain()
  overdriveOutput.connect(delayOutput)
  //if (DelayTime > 0)
  // const filter = context.createBiquadFilter()
  // const delay = context.createDelay(1.5)
  // const feedback = context.createGain()
  // const delayGain = context.createGain()


  // filter.frequency.value = 3200
  // delay.delayTime.value = 0.5
  // feedback.gain.value = 0.25
  // delayGain.gain.value = 0.3

  // filter.connect(delay)
  // delay.connect(feedback)
  // feedback.connect(delay)
  // feedback.connect(delayGain)
  // delayGain.connect(delayOutput)


  //source.connect(delayOutput)
  delayOutput.connect(context.destination)
  console.log(context)
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