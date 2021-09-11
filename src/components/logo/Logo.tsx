import logoImg from '../../assets/logo.png'
import { Container, ContentLogin, ContentLogo, ContentForm, LinkForm } from './styles'

export function Logo() {
  return (
    <Container>
      <ContentLogo>
        <img src={logoImg} alt="Imagem Minhas Finanças" />
      </ContentLogo>

      <ContentLogin>
        <ContentForm>
          <h1>LOGIN</h1>

          <form action="">
            <label htmlFor="">E-mail</label>
            <input type="text" />

            <label htmlFor="">Senha</label>
            <input type="password" />

            <button type="submit">ENTRAR</button>
          </form>

          <LinkForm>
            <p>Primeira vez por aqui?</p>
            <a href="##">Cadastre-se</a>
          </LinkForm>
        </ContentForm>
      </ContentLogin>
    </Container>
  )
}