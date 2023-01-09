import styled from 'styled-components'

export const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-around;   

    @media(max-width:768px){
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
    }
`

export const BotHeader = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.06rem;

    h1 {
        font-size: 4rem;
    }

    p {
        color: #ECD6C4;
        font-size: 1.5rem;
    }

    @media(max-width:768px){
        width: 100%;
        flex-wrap: wrap;
    }
`

export const BotImage = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    img {
        height: 26.62rem;
        border: none;
        margin-top: -4rem;
    }

    @media(max-width:768px){
        width: 100%;        
        flex-wrap: wrap;

        img {
            align-self: center;
        }
    }

    @media(max-width:1000px){
        display: block;
    }
`