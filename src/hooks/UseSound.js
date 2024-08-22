import { useEffect, useState } from "react";

const UseSound = (url, options) => {
  const [sound, setSound] = useState(false);

  useEffect(() => {
    const audio = new Audio(url);

    audio.load();
    audio.volume = options.volume;
    setSound(audio);
  }, [options.volume, url]);

  return () => {
    if (sound) {
      sound.play();
    }
    setTimeout(() => {
        sound.pause();
        sound.currentTime = 0;
    } , options.timeout)
  };
};

export default UseSound;
