import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { Contador } from "./components/Contador";
import { DefaultInput } from "./components/DefaultInput";
import { DefaultButton } from "./components/DefaultButton";

import { Cycles } from "./components/Cycles";
import { PlayCircleIcon, StopCircleIcon } from "lucide-react";

import "./styles/Theme.css";
import "./styles/Global.css";
import { Footer } from "./components/Footer";

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
      <Container>
        <form className="form">
          <div className="formRow">
            <DefaultInput 
              id="inputId" 
              type ="text" 
              labelText="task" 
              title="Meu título" 
              placeholder="Digite algo"
            />
          </div>
          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="formRow">
            <Cycles/>
          </div>
          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon/>} />
          </div>
        </form>
      </Container>

      <Container>
        <Footer/>
      </Container>
      
    </>
  );
}
