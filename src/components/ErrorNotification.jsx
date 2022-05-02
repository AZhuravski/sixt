import styled from "@emotion/styled";
import { useSelector } from "react-redux";

const ErrorNotification = () => {
  const appStatus = useSelector((state) => state.appStatus);

  return (
    <StyledErrorNotification>
      <div className="title">{appStatus.title}</div>
      <div className="message">{appStatus.message}</div>
    </StyledErrorNotification>
  );
};

export default ErrorNotification;

// Component Styles

const StyledErrorNotification = styled.div({
  position: "absolute",
  top: "2rem",
  right: "2rem",
  padding: "3rem 6rem 3rem 3rem",
  borderRadius: "1rem",
  backgroundColor: "darkred",
  color: "white",
  boxShadow:
    "rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
  ".title": {
    fontSize: "2rem",
    fontWeight: 700,
  },
  ".message": {
    fontSize: "1.5rem",
  },
});
