let midiPitch = document.getElementById("midiInput");
let freq = document.getElementById("freqInput");
let dBFS = document.getElementById("dbfsInput");
let linear = document.getElementById("linearInput");

document.getElementById("midiToFreq").addEventListener("click", midiToFreq);

document.getElementById("freqToMidi").addEventListener("click", freqToMidi);

document.getElementById("dbfsToLinear").addEventListener("click", dbfsToLinear);

document.getElementById("linearToDbfs").addEventListener("click", linearToDbfs);
