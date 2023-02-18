

import styled from "styled-components";

export const StyledStat = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 60px;
  
  background-color: ${({bgcolor})=>bgcolor};
  border: 2px solid rgba(166,77,199,0.75);
  border-radius: 50%;


  & .label {
    
  }

  & .percentage{
    color: red;
  }

`
