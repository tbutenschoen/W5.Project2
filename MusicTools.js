const myMusicTools = {
  midiPitch: document.getElementById("midiInput"),
  freq: document.getElementById("freqInput"),
  dBFS: document.getElementById("dbfsInput"),
  linear: document.getElementById("linearInput"),

  midiToFreq: function (midiPitch) {
    let midiValue = 440 * Math.pow(2, (midiPitch - 69) / 12);
    midiValue = parseFloat(midiValue);
    return midiValue;
  },

  freqToMidi: function (freq) {
    return 69 + 12 * Math.log2(freq / 440);
  },

  dbfsToLinear: function (dBFS) {
    return Math.pow(10, dBFS / 20);
  },

  linearToDbfs: function (linear) {
    return 20 * Math.log10(linear);
  },
};

export default myMusicTools;
