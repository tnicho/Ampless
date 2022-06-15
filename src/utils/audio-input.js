const context = new AudioContext({latencyHint: 'interactive'})

  
export function audioStart (){
  setupContext()
}

export function audioStop (){
  context.close()
}

async function setupContext(){
  const input = await getInput()
  if (context.state === 'suspended'){
    await context.resume()
  }
  const source = context.createMediaStreamSource(input)
  source.connect(context.destination)
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


