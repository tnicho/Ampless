const context = new AudioContext()

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
  


let audioInput = getInput()

if (context.state === 'suspended'){
    await context.resume()
  }

let source = context.createMediaStreamSource(input)
source.connect(context.destination)
source.connect(analyserNode)


