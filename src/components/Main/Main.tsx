import { Wrapper, Logo, Title, Description, Illustration } from './Main.style'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, React, Next.js, Styled Components, Tailwind e Material UI'
}) => (
  <Wrapper>
    <Logo
      src="/img/logo.svg"
      alt="Átomo na cor branca em um hexágono rosa claro"
    />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Illustration
      src="img/hero-illustration.svg"
      alt="Desenvolvedor de software de frente para três telas de computador"
    />
  </Wrapper>
)

export default Main
