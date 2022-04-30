import { notificationActions } from "./notificationSlice";
import { offersActions } from "./offersSlice"
// import axios from "axios";
import { offers } from '../data/offers'

export const getOffersData = () => {
    return async (dispatch) => {
        dispatch(
            notificationActions.showNotification({
                status: 'pending',
                title: 'Loading...',
                message: 'Getting offers data!',
            })
        );

        // axios.get('http://cdn.sixt.io/codingtask/offers.json')
        //     .then(response => {
        //         dispatch(offersActions.setOffersData(response.data.offers))
        //         dispatch(
        //             notificationActions.showNotification({
        //                 status: 'success',
        //                 title: 'Success!',
        //                 message: 'Offers data loaded!',
        //             })
        //         );
        //     })
        //     .catch(error => {
        //         notificationActions.showNotification({
        //             status: 'error',
        //             title: 'Error!',
        //             message: 'Getting offers data failed!',
        //         })
        //     })

        setTimeout(() => {
            dispatch(offersActions.setOffersData(offers))
            dispatch(
                notificationActions.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Offers data loaded!',
                })
            );
        }, 1000);
    }
}