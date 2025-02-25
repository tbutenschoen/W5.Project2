const myMusicTools = {
  midiPitch: document.getElementById("midiInput"),
  freq: document.getElementById("freqInput"),
  dBFS: document.getElementById("dbfsInput"),
  linear: document.getElementById("linearInput"),

  midiToFreq: function (midiPitch) {
    return document.getElementById("freqResult") = 440 * Math.pow(2, (midiPitch - 69) / 12);
  },

  freqToMidi: function (freq) {
    return document.getElementById("midiResult") = 69 + 12 * Math.log2(freq / 440);
  },

  dbfsToLinear: function (dBFS) {
    return document.getElementById("linearResult") = Math.pow(10, dBFS / 20);
  },

  linearToDbfs: function (linear) {
    return document.getElementById("dbfsResult") = 20 * Math.log10(linear);
  },

  
};

export default myMusicTools;
