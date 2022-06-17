----AMPLESS----

Audio Input Manipulation without on your desktop, no effects pedals or an amp required

Final Project of the General Assembly SEI Course

----ScreenShots----

Login:https://github.com/tnicho/Ampless/blob/main/Ampless%20Login.png

Signup:https://github.com/tnicho/Ampless/blob/main/Ampless%20Signup.png

Main Page:https://github.com/tnicho/Ampless/blob/main/Ampless%20Main%20Page.png

----Technologies Used----

MongoDB, Express, React, Node, Material UI, Heroku, VSCode

----Getting Started----

Designed to be used with a guitar and a converter from guitar jack to USB

Use Switches to enable an effect

Use Sliders to adjust the intensity of the effects

Press Start Button to begin registering input

Press Stop Button to end registering input

Save will save the values of the effects, or "Setups" into a file.

These "Setups" can be found on the right hand side by name.

Delete a "Setup" by opening it from the right hand side and pressing the delete button on the left hand side

Current effects:

Overdrive made with createWaveShaper() and makeDistortionCurve

Delay- made with a feedback loop of gain nodes

GainBoost - made with a simple gain node

Reverb - made with createConvolver()

Deployed website: https://ampless.herokuapp.com/

Planning:
Trello Board: https://trello.com/invite/b/519s3oEn/01bdfcb014b5cb94c9f695e51c8a92a1/final-project-ampless

WireFrames:   https://github.com/tnicho/Ampless/blob/main/WireFrames1.png
          :   https://github.com/tnicho/Ampless/blob/main/WireFrame2.png
              
ERD:          https://github.com/tnicho/Ampless/blob/main/ERD.png

----Next Steps----

Allow selection between different impulses for Reverb effect

Create Tremelo effect

Create Chorus effect

Require confirmation when deleting a "Setup"

Enable a "Dark Mode" theming

Allow Recordings of audio files under each "Setup"

Create CRUD functionality for recordings

