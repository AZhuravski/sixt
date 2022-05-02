import { useEffectOnce } from "./hooks/useEffectOnce";
import { useDispatch, useSelector } from "react-redux";
import { getOffersData } from "./store/offersActions";
import ErrorNotification from "./components/ErrorNotification";
import Offers from "./components/Offers";
import Header from "./components/Header";
import styled from "@emotion/styled";
import Loader from "react-js-loader";

const App = () => {
  const dispatch = useDispatch();
  const appStatus = useSelector((state) => state.appStatus);
  const showLoader = appStatus.status === "pending";
  const showOffers = appStatus.status === "success";
  const showErrorNotification = appStatus.status === "error";

  useEffectOnce(() => {
    dispatch(getOffersData());
  }, [dispatch]);

  return (
    <StyledAppWrapper>
      <Header />

      {showOffers && <Offers />}

      {showLoader && (
        <StyledLoader>
          <Loader type="box-rectangular" bgColor="rgb(25,25,25)" />
        </StyledLoader>
      )}

      {showErrorNotification && <ErrorNotification />}
    </StyledAppWrapper>
  );
};

export default App;

// Component Styles

const StyledAppWrapper = styled.div({
  maxWidth: 1600,
  height: "100%",
  margin: "0 auto",
  backgroundColor: "rgb(242,242,242)",
});

const StyledLoader = styled.div({
  marginTop: "2rem",
});
