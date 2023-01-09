import styled from 'styled-components'

export const StyledButton = styled.button`
    width: 185px;
    height: 67px;
    border-radius: 20px;
    background: #ECD6C4;
    border: none;
    font-size: 1.3rem;
    color: #3f2325;
    cursor: pointer;
    font-weight: bold;    
    box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.4s ease;

    &:hover {
        opacity: 0.9;
        transform: scale(1.1);
    }

    @media(max-width:768px){
        align-self: center;
        margin-bottom: 6rem;
    }
`