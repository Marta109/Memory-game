let currentAudio = null;
let isMuted = false;

export const playSound = (sound) => {
  if (isMuted) return;

  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  if (sound) {
    currentAudio = new Audio(sound);
    currentAudio.play();
  }
};

export const stopSound = () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
};

export const toggleMute = () => {
  isMuted = !isMuted;
};
