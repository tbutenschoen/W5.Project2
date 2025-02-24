function midiToFreq() {
  return 440 * Math.pow(2, (midiPitch - 69) / 12);
}

function freqToMidi() {
  return 69 + 12 * Math.log2(freq / 440);
}

function dbfsToLinear() {
  return Math.pow(10, dBFS / 20);
}

function linearToDbfs() {
  return 20 * Math.log10(linear);
}
