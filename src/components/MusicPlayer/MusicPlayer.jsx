import React, { useContext, useEffect, useRef, useState } from "react";
import { MusicPlayerWrapper } from "./MusicPlayer.styled";
import { playlist } from "../../utils/MusicUtils/playlist";
import { randomizeIndex } from "../../utils/MusicUtils";
import { PlayIcon, PauseIcon, SkipNextIcon } from "./MusicPlayer.styled";
import { SfxContext } from "../../contexts/SfxContext";
import { SongText } from "./MusicPlayer.styled";

const MusicPlayer = () => {
  const { hoverSfx, clickedSfx } = useContext(SfxContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(randomizeIndex(playlist));
  const [playPromise, setPlayPromise] = useState(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      const promise = playerRef.current?.play();
      setPlayPromise(promise);
      if(playerRef.current?.volume) {
        playerRef.current.volume = 0.02
      }
      return;
    }
    playerRef.current.pause();
  }, [isPlaying, currentSong]);

  const shuffleHandler = async () => {
    clickedSfx();
    setIsPlaying(false);
    await playPromise?.then(() => {
      playerRef.current.pause();
    });

    setCurrentSong(randomizeIndex(playlist));
    setIsPlaying(true);
  };

  const displaySong = playlist[currentSong].split("/")[6];

  return (
    <MusicPlayerWrapper>
      {isPlaying ? (
        <PauseIcon
          onClick={() => {
            clickedSfx();
            setIsPlaying(false);
          }}
          onMouseEnter={() => hoverSfx()}
        />
      ) : (
        <PlayIcon
          onClick={() => {
            clickedSfx();
            setIsPlaying(true);
          }}
          onMouseEnter={() => hoverSfx()}
        />
      )}

      <SkipNextIcon onClick={shuffleHandler} onMouseEnter={() => hoverSfx()} />

      <audio
        ref={playerRef}
        src={playlist[currentSong]}
        onEnded={shuffleHandler}
      ></audio>
      <SongText>{displaySong}</SongText>
    </MusicPlayerWrapper>
  );
};

export default MusicPlayer;
