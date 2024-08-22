import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { HeaderWrapper, LightModeIcon, DarkModeIcon } from "./Header.styled";
import { ReactComponent as Logo } from "../../assets/svgs/tic-tac-toe-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
import { SfxContext } from "../../contexts/SfxContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { hoverSfx, clickedSfx } = useContext(SfxContext);
  return (
    <HeaderWrapper>
      <Logo
        className="logo"
        onClick={() => {
          clickedSfx();
          navigate("/");
        }}
        onMouseEnter={() => hoverSfx()}
      />

      <span
        onClick={() => {
          clickedSfx();
          toggleTheme();
        }}
        onMouseEnter={() => hoverSfx()}
      >
        {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </span>
    </HeaderWrapper>
  );
};

export default Header;
