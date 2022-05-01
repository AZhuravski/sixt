import styled from "@emotion/styled";
import { ReactComponent as LogoSVG } from "../assets/svg/logo.svg";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogoWrapper>
        <LogoSVG />
      </StyledLogoWrapper>
    </StyledHeader>
  );
};

export default Header;

// Component Styles

const StyledHeader = styled.header({
  position: "relative",
  svg: {
    height: "3rem",
  },
});

const StyledLogoWrapper = styled.div({
  background: "#fff",
  margin: "0 auto",
  minHeight: "4.375rem",
  padding: "1rem 1.25rem",
  position: "relative",
  display: "flex",
  alignItems: "center",
});
