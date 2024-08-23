import styled from "styled-components";
import { MdPlayArrow, MdPause, MdSkipNext} from "react-icons/md";

export const MusicPlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 100vw;
  position: fixed;
  bottom: 0;
  background: ${(props) => props.theme.colors.secondary};
`
export const PlayIcon = styled(MdPlayArrow)`
 color: ${(props) => props.theme.colors.primary};
 font-size: 3rem;
 cursor: pointer
`
export const PauseIcon = styled(MdPause)`
 color: ${(props) => props.theme.colors.primary};
 font-size: 3rem;
 cursor: pointer
`
export const SkipNextIcon = styled(MdSkipNext)`
 color: ${(props) => props.theme.colors.primary};
 font-size: 3rem;
 cursor: pointer
`
export const SongText = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.2rem;
  font-weight: 200;
  background-color: transparent;
  padding: 10px;
`;