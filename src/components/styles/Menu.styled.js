import styled from 'styled-components'

export const Navbar = styled.nav`
    width: 100%;
    min-height: 32px;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #FFF2E7;
    margin-bottom: 5.87rem;

    @media(max-width:768px){
        margin-bottom: 3rem;
    }
`
export const Container = styled.div`
    width: 70%;
    max-width: 1440px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media(max-width:768px){
        width: 80%;
        flex-direction: column;
        text-align: center;
        justify-content: center;
    }

    @media(max-width:1200px){
        .logo {
            position: relative;
            margin: 0 auto 1.5rem auto;
        }
    }
 
`
export const Logo = styled.img`
    height: 64px;
    border: none;

    @media(max-width:768px){
        height: 96px;
    }

    @media(max-width:949px){
        margin-bottom: .7rem;
    }
`

export const Navlinks = styled.ul`
    display: flex;
    gap: 3rem;

    @media(max-width:768px){
        margin: 1.5rem 0;
        flex-direction: column;
        text-align: center;
    }

`

export const MenuLinks = styled.a`
    color: #FFF2E7;
    font-size: 1.2rem;

    &:hover {
        opacity: 0.7;
    }

    @media(max-width:768px){
        font-size: 1.4rem;
    }

`

