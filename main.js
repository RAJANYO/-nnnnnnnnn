var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Textbox = document.getElementById("textbox");
function start() {
  Textbox.innerHTML = "";
  recognition.start();
}
recognition.onresult = function (event) {
  content = event.results[0][0].transcript;
  document.getElementById('textbox').innerHTML = content;
  if (content == "take my collage") {
    speak();
  }

}
function speak() {
  var synth = window.speechSynthesis;
  speakdata = "taking your selfie in 5 seconds"
  utter = new SpeechSynthesisUtterance(speakdata);
  synth.speak(utter);
  Webcam.attach(camera);
  setTimeout(function () { take_selfie(); save(); }, 5000);
}
Webcam.set({
  width: 320, height: 240, image_format: "jpeg", jpeg_quality: 90
});
camera = document.getElementById("camera");
function take_selfie() {
  Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>';
  });
}
function save(){
  link=document.getElementById("link");
  image=document.getElementById("selfie_image");
  link.href=image;
  link.click();
}