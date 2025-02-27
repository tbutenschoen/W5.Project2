import myMusicTools from "./MusicTools.js";

//number typed in, do the math, display result
const mToF = function () {
  let midiInput = document.getElementById("midiInput").value;
  let freqResult = myMusicTools.midiToFreq(midiInput);
  document.getElementById("freqResult").innerText = freqResult;
};

const fToM = function () {
  let freqInput = document.getElementById("freqInput").value;
  let midiResult = myMusicTools.freqToMidi(freqInput);
  document.getElementById("midiResult").innerText = midiResult;
};

const dToL = function () {
  let dbfsInput = document.getElementById("dbfsInput").value;
  let linearResult = myMusicTools.dbfsToLinear(dbfsInput);
  document.getElementById("linearResult").innerText = linearResult;
};

const lToD = function () {
  let linearInput = document.getElementById("linearInput").value;
  let dbfsResult = myMusicTools.linearToDbfs(linearInput);
  document.getElementById("dbfsResult").innerText = dbfsResult;
};

document.getElementById("midiToFreq").addEventListener("click", mToF);

document.getElementById("freqToMidi").addEventListener("click", fToM);

document.getElementById("dbfsToLinear").addEventListener("click", dToL);

document.getElementById("linearToDbfs").addEventListener("click", lToD);
