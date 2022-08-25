import { Button, Header, HeaderContent, Navbar, About, Line, Image, Footer } from "./styles";
import { MapPin, WhatsappLogo, List, Quotes } from "phosphor-react";

import logo from "../../assets/logo.png";
import image from "../../assets/skin-care-concept-charming-young-caucasian-woman-with-perfect-makeup-photo-composition-brunette-girl-isolated-pink-background-with-copy-space 1.svg";
import imageStone from "../../assets/beautiful-pink-spa-flowers-spa-hot-stones-water-wet-background-side-composition-copy-space-spa-concept-dark-background.svg"

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
          <Button>
            AGENDE SEU HORARIO
          </Button>
        </HeaderContent>
      </Header>
      <About>
        <div>
          <Line />
          <h3>Sobre o SPA</h3>
          <h2>Bem-Vindo ao SPA</h2>
          <p>
            Você merece os nossos serviços! Com os melhores profissionais da região para valorizar a sua beleza, 
            não deixe para depois e marque uma hora com a gente! 
          </p>
        </div>
        <Image>
          <img src={image} alt="" />
        </Image>
      </About>
      <Footer>
        <Quotes size={70} weight={"fill"} />
        <h2>Melhor SPA do Inatel</h2>
        <span>Pedro Augusto</span>
      </Footer>
    </div>
  );
}