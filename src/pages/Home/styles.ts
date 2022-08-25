import styled from "styled-components";

export const Header = styled.header`
  height: 49.3125rem;
  width: 100%;

  background-image: url("/src/assets/photo-of-thinking-young-woman-with-a-towel-on-her-head-after-shower-can-t-make-a-decision-looks-away-and-touches-cheek-stands 1.svg");
  background-repeat: no-repeat;
  background-size: 100%;
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
    margin-top: 1.75rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;

      margin-left: 3.8125rem;

    }

  }

`;
