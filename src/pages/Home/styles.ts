import styled from "styled-components";

export const Header = styled.header`
  height: 49.3125rem;

  background-image: url("/src/assets/photo-of-thinking-young-woman-with-a-towel-on-her-head-after-shower-can-t-make-a-decision-looks-away-and-touches-cheek-stands 1.svg");
  background-repeat: no-repeat;
  background-size: 100%;

  display: flex;
  flex-direction: column;

  justify-content: flex-start;

`;

export const Navbar = styled.nav`
  margin: 0 7.375rem 0 8.625rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    color: ${props => props.theme["gray-300"]};

    margin-right: 15px;

  }

  & > div {
    /* margin-top: 1.75rem; */

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${props => props.theme["white"]};

    div {
      display: flex;
      align-items: center;

      margin-left: 3.8125rem;

    }

  }

`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: flex-start;

  flex-direction: column;

  margin-left: 9.75rem;
  margin-top: 5rem;

  color: ${props => props.theme["white"]};
  font-family: "Roboto", sans-serif;

  h1 {
    font-weight: 700;

  }

  p {
    font-weight: 400;
    width: 28.8125rem;

    margin-top: 1.875rem;
    line-height: 18.75px;

  }
`; 

export const BaseButton = styled.button`
    width: 16.875rem;
    height: 50px;

    border-radius: 5px;

    background-color: ${props => props.theme["gray-300"]};

    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;

    line-height: 18.75px;

`;
export const Button = styled(BaseButton)`
    margin-top: 1.875rem;

    cursor: pointer;

    color: ${props => props.theme["white"]};

    transition: opacity .2s scale .3s;

    &:hover {
      opacity: .8;

    }

    &:active {
      scale: .95;
    }

`;

export const About = styled.main`
  height: 22.5625rem;

  display: flex;
  justify-content: space-between;

  color: ${props => props.theme["gray-600"]};
  
  margin: 5.625rem 14.6875rem 4.3125rem 14.25rem;

  h3 { 
    margin-top: 0.9375rem;
    font-size: 1.31rem;
    font-weight: 700;
    line-height: 24.61px;

  }

  h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 2.125rem;
    line-height: 2.5rem;

    color: ${props => props.theme["gray-300"]};

    margin-top: .75rem;

  }

  p {
    font-weight: 400;
    width: 28.8125rem;

    margin-top: 1.875rem;
    line-height: 18.75px;

  }

`;

export const Line = styled.div`
  width: 35px;
  height: 0;

  content: '';

  border: 3px solid ${props => props.theme["gray-300"]};
  border-radius: 4px;

`;

export const Image = styled.div`
  box-sizing: border-box;

  position: relative;

  width: 24.875rem;
  height: 20.75rem;

  border: 3px solid ${props => props.theme["pink-500"]};

  img {
    position: absolute;

    top: -35px;
    right: -15px;


  }

`;

export const Footer = styled.footer`
  background-image: url("/src/assets/beautiful-pink-spa-flowers-spa-hot-stones-water-wet-background-side-composition-copy-space-spa-concept-dark-background.svg");
  background-repeat: no-repeat;
  background-size: 100%;

  height: 349px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "Roboto", sans-serif;
  color: ${props => props.theme["white"]};

  svg {
    color: ${props => props.theme["gray-300"]};
    margin-bottom: 2rem;

  }

  h2 {
    margin-bottom: .9375rem;
    font-weight: 700;
    font-size: 1.625rem;

  }

  span {
    font-weight: 400;
  }

`;
