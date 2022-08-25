import styled from "styled-components";

export const Header = styled.header`
  height: 49.3125rem;
  width: 100%;

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

export const Button = styled.button`
    width: 16.875rem;
    height: 50px;

    border-radius: 5px;

    background-color: ${props => props.theme["gray-300"]};

    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;

    line-height: 18.75px;

`;
