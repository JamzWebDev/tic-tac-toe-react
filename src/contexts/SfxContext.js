import { createContext } from "react";
import UseSound from "../hooks/UseSound";

export const SfxContext = createContext({});

export function SfxContextProvider({ children }) {
  const options = {
    volume: 0.05,
    timeout: 200
  };

  const hoverPath =
    "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/tick.mp3";
  const clickedPath =
    "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/click.wav";
  const winnerPath =
    "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/winner.wav";
  const completedPath =
    "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/completed.wav";

  const hoverSfx = UseSound(hoverPath, options);
  const clickedSfx = UseSound(clickedPath, options);
  const winnerSfx = UseSound(winnerPath, {...options, timeout: 1000});
  const completedSfx = UseSound(completedPath, {...options, timeout: 2500});

  return (
    <SfxContext.Provider value={{ hoverSfx, clickedSfx, winnerSfx, completedSfx }}>{children}</SfxContext.Provider>
  );
}
