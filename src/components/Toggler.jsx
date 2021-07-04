import React from 'react';
import styled from "styled-components";
import { MdWbSunny } from "react-icons/md";
import { HiMoon } from "react-icons/hi";

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.backgroundIcon};
  width: 5rem;
  height: 2.25rem;
  margin: 0 auto;
  border-radius: 30px;
  font-size: 0.5rem;
  padding: 0.5rem;
  overflow: hidden;
  cursor: pointer;

  .icon {
    transition: all 0ms linear;

    &:first-child {
        transform: ${({ lightTheme }) => lightTheme ? 'translateX(0);' : 'translateX(100px)'};
      }
  
      &:nth-child(2) {
        transform: ${({ lightTheme }) => lightTheme ? 'translateX(-100px)' : 'translateX(0)'};
      }
   }
`;

export default function Toggler({theme, toggleTheme}) {
    const icon = theme === "light" ? <MdWbSunny size={20} style={{ color: "yellow" }} /> : <HiMoon size={20} />;
    const isLight = theme === 'light';

    return (
        <ToggleButton lightTheme={isLight} onClick={toggleTheme}>
            <span className="icon">{icon}</span>
            <span className="icon">{icon}</span>            
        </ToggleButton>
    )
}
