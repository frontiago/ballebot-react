import styled from 'styled-components'

export const StyledMain = styled.main`
    width: 70%;
    max-width: 1440px;    
    min-height: 200px;
    margin: 2rem 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 1.4rem 0;

    h2 {
        width: 400px;        
        border-top: 1px solid #fff;
        padding-top: 3rem;
        font-size: 1.7rem;
    }

    p {
        font-size: 1.2rem;
    }
`