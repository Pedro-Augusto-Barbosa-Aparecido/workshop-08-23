import { Header, Navbar } from "./styles";
import { MapPin, WhatsappLogo, List } from "phosphor-react";

export function Home () {
  return (
    <div>
      <Header>
        <Navbar>
          <img 
            src="../../assets/logo.png" 
            alt=""
          />
          <div>
            <div>
              <MapPin size={25} weight="fill" />
              <span>R. Lino viana da Silva, 000</span>
            </div>
            <div>
              <WhatsappLogo size={25} weight="fill" />
              <span>R. Lino viana da Silva, 000</span>
            </div>
            <div>
              <List size={25} weight="fill"  />
            </div>
          </div>
        </Navbar>
      </Header>
    </div>
  );
}