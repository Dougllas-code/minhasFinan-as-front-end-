import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  height: 100vh;
  font-family: 'Fira Code';
`

export const ContentLogo = styled.div`
  flex: 6;
  background-color: var(--verde_claro);
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    padding: 0 90px;
  }

`

export const ContentLogin = styled.div`
  flex: 8;
  background-color: var(--background_medio);
  color: var(--cinza_claro);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContentForm = styled.div`
  background-color: var(--background_claro);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 55%;

  h1 {
    color: var(--cinza_claro);
    font-size: 36px;
    line-height: 37px;
    letter-spacing: 10px;
    font-weight: 600;

    padding: 30px 0 0 30px;
  }

  form {
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    label {
      font-size: 26px;
      line-height: 27px;
      padding: 30px 0 5px 30px;
    }

    input {
      height: 55px;
      margin: 0 30px;
      border-radius: 5px;
      background-color: var(--cinza_medio);

      font-size: 22px;
      font-family: 'Fira Code';
      padding: 5px;
    }

    button {

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: var(--verde_claro);
      border-radius: 5px;
      border: none;

      font-size: 24px;
      font-weight: 600;
      letter-spacing: 5px;
      color: var(--cinza_claro);

      padding: 15px;
      margin: 30px 30px;

      &:hover {
        background-color: var(--cinza_claro);
        color: var(--verde_claro);
      }

    }
  }
`
export const LinkForm = styled.div`

  display: flex;
  flex-direction: row;

  p {
    color: var(--cinza_claro);
    font-size: 18px;
    padding: 5px 0px 30px 30px;
  }

  a {
    text-decoration: none;
    color: var(--verde_claro);
    font-size: 18px;
    padding: 5px 0px 30px 5px;
  }

`