import { useSelector } from "react-redux"
import OfferItem from "./OfferItem"

const Offers = () => {
    const offers = useSelector(state => state.offers)
    const offerList = offers.offers

    return (
        <div>
            <div>{offerList.length} Angebote</div>
            {offerList.map(item => (
                <OfferItem 
                    key={item.id}
                    description={item.headlines.description}
                    shortSubline={item.headlines.shortSubline}
                    imageUrl={item.carGroupInfo.modelExample.imageUrl}
                    mileageInfo={item.mileageInfo.display}
                    dayPrice={item.prices.dayPrice}
                    totalPrice={item.prices.totalPrice}
                />
            ))}
        </div>
    )

}

export default Offers