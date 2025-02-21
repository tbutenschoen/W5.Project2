function midiToFreq(midiPitch) {
  let f1 = 440 * Math.pow(2, (midiPitch - 69) / 12);
  return f1;
}

function freqToMidi(freq) {
  let f2 = 69 + 12 * Math.log2(freq / 440);
  return f2;
}

function dbfsToLinear(dBFS) {
  let f3 = Math.pow(10, dBFS / 20);
  return f3;
}

function linearToDbfs(linear) {
  let f4 = 20 * Math.log10(linear);
  return f4;
}

let midiPitch = document.getElementById("midiInput");
let freq = document.getElementById("freqInput");
let dBFS = document.getElementById("dbfsInput");
let linear = document.getElementById("linearInput");
let f1 = document.getElementById("freqResult");
let f2 = document.getElementById("midiResult");
let f3 = document.getElementById("linearResult");
let f4 = document.getElementById("dbfsResult");

const button = document.getElementById("midiToFreq");
button.addEventListener("click", midiToFreq);

const button2 = document.getElementById("freqToMidi");
button.addEventListener("click", freqToMidi);

const button3 = document.getElementById("dbfsToLinear");
button.addEventListener("click", dbfsToLinear);

const button4 = document.getElementById("linearToDbfs");
button.addEventListener("click", linearToDbfs);
