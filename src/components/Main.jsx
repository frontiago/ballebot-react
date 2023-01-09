import {StyledMain} from './styles/Main.styled'

const Main = () => {
  return (
    <StyledMain>
        <h2>O que ela faz por você?</h2>
        <p>1. <strong> Cria um sistema de verificação </strong> 
          capcha para novos membros garantirem que não são robôs 
        </p>
        <p>2. Possui um <strong>sistema de banimento automático</strong> 
        para links suspeitos que forem enviados na comunidade
        </p>
        <p>3. <strong>Sistema de avisos e banimento manual</strong>, 
        para pessoas administradoras utilizarem
        </p>
    </StyledMain>
  )
}

export default Main
