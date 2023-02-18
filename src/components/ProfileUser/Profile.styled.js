import styled from 'styled-components'

export const StyledProfile = styled.div`

  max-width: 300px;
  margin: 0 auto;

  border: 2px solid rgba(166,77,199,0.75);
  box-shadow: 11px 10px 19px -1px rgba(166,77,199,0.75);


  & .avatar{
    border-radius: 50%;
  }

  & .description{
    background: linear-gradient(to left, #8e44ad, #c0392b); 
    padding: 12px 0;
  }

  & .name{
    font-size: 24px;
    margin-left: 12px;
    text-align: center;
    color: #F4E90B;
    margin-bottom: 8px;
  }

  & .tag{
    margin-left: 12px;
    color: #2BB2C0;
    font-style: italic;
    margin-bottom: 8px;
  }

  & .location{
    align-self: center;
    margin-left: 12px;
    color: #2BB2C0;
  }
  
`