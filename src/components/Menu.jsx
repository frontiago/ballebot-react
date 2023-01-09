import './styles/Menu.styled'
import {Navbar, Container, Logo, Navlinks, MenuLinks} from './styles/Menu.styled'

const Menu = () => {
  return (
      <Navbar>
        <Container>
            <Logo src="./images/logo.svg" className="logo"/> 
            <Navlinks>
              <MenuLinks href="https://google.com"><li>Comunidade Ballerini</li></MenuLinks>
              <MenuLinks href="https://google.com"><li>Tutorial</li></MenuLinks>
              <MenuLinks href="https://google.com"><li>Open Source</li></MenuLinks>
              <MenuLinks href="https://google.com"><li>Comandos</li></MenuLinks>
            </Navlinks>     
        </Container>
      </Navbar>
  )
}

export default Menu
