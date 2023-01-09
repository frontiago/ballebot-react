import './styles/Header.styled.js'
import {Container} from './styles/Menu.styled'
import {StyledHeader, BotHeader, BotImage} from './styles/Header.styled'
import Button from './Button'

const Header = () => {
  return (
    <StyledHeader>
      <Container>

        <BotHeader>
          <h1>Balle Bot</h1>
          <p>Deixe a sua comunidade segura de um jeito fácil</p>
          <Button></Button>
        </BotHeader>

        <BotImage>
          <img src="./images/robot.svg" alt="" className="image-robot"/>
        </BotImage>
      </Container>
    </StyledHeader>
  )
}

export default Header
