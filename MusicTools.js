MIDI2freq = function (midiPitch) {
  return 440 * Math.pow(2, (midiPitch - 69) / 12);
};

freq2MIDI = function (freq) {
  return 69 + 12 * Math.log2(freq / 440);
};

dBFS2a = function (dBFS) {
  return Math.pow(10, dBFS / 20);
};

a2dBFS = function (linear) {
  return 20 * Math.log10(linear);
};
