import { Header, HeaderContent, Navbar } from "./styles";
import { MapPin, WhatsappLogo, List } from "phosphor-react";

import logo from "../../assets/logo.png"

export function Home () {
  return (
    <div>
      <Header>
        <Navbar>
          <img 
            src={logo}
            alt=""
          />
          <div>
            <div>
              <MapPin size={25} weight="fill" />
              <span>R. Lino viana da Silva, 000</span>
            </div>
            <div>
              <WhatsappLogo size={25} weight="fill" />
              <span>(35) 987058495</span>
            </div>
            <div>
              <List size={25} weight="fill"  />
            </div>
          </div>
        </Navbar>
        <HeaderContent>
          <h1>Salão de Beleza R&D</h1>
          <p>
            Você merece os nossos serviços! Com os melhores profissionais da região para valorizar a sua beleza, 
            não deixe para depois e marque uma hora com a gente! 
          </p>
        </HeaderContent>
      </Header>
    </div>
  );
}