import myMusicTools from "./MusicTools.js";

document
  .getElementById("midiToFreq")
  .addEventListener("click", myMusicTools.midiToFreq);

document
  .getElementById("freqToMidi")
  .addEventListener("click", myMusicTools.freqToMidi);

document
  .getElementById("dbfsToLinear")
  .addEventListener("click", myMusicTools.dbfsToLinear);

document
  .getElementById("linearToDbfs")
  .addEventListener("click", myMusicTools.linearToDbfs);
