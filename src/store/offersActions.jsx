import { appStatusActions } from "./appStatusSlice";
import { offersActions } from "./offersSlice";
import axios from "axios";

export const getOffersData = () => {
  return (dispatch) => {
    dispatch(
      appStatusActions.setAppStatus({
        status: "pending",
        title: "Loading...",
        message: "Getting offers data!",
      })
    );

    axios.get('/codingtask/offers.json')
    .then(response => {
            dispatch(offersActions.setOffersData(response.data))
            dispatch(
                appStatusActions.setAppStatus({
                  status: "success",
                  title: "Success!",
                  message: "Offers data loaded!",
                })
              );
        })
        .catch(error => {
            dispatch(
                appStatusActions.setAppStatus({
                  status: "error",
                  title: "Error!",
                  message: "Getting offers data failed!",
                })
              );
        })
  };
};
