

import styled from "styled-components";

export const StyledFriendListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 200px;
  border: 2px solid rgba(166,77,199,0.75);
  padding: 8px;
  box-shadow: 4px 4px 8px -1px rgba(166,77,199,0.75);

  & .status{
    width:12px;
    height:12px;
    flex-shrink: 0;
    background-color: green;
    border-radius: 50%;

    &.off{
    background-color: red;
    }
  }

  & .avatar{
    width: 72px;
    height: 72px;
    border: 1px solid green;
    padding: 6px;
    border-radius: 4px;
    
    &.off{
      border: 1px solid red;
    }
  }

  & .name{
    font-style: italic;
  }
`