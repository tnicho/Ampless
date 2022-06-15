

async function getInput(){
    return navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: false,
        autoGainControl: false,
        noiseSuppression: false,
        latency: 0
      }
    })
  }

  
export async function audioStart (){
  console.log("inside AudioStart")
  const context = new AudioContext()
  let audioInput = getInput()
  if (context.state === 'suspended'){
      await context.resume()
    }
    console.log("audioInput: ", audioInput)
  let source = context.createMediaStreamSource(audioInput)
  source.connect(context.destination)
}



