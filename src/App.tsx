import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import "./styles/Theme.css";
import "./styles/Global.css";
import { Contador } from "./components/Contador";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu/>
      </Container>
      <Container>
        <Contador/>
      </Container>
    </>
  );
}
