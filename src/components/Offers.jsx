import styled from "@emotion/styled"
import { useSelector } from "react-redux"
import OfferItem from "./OfferItem"

const Offers = () => {
    const offers = useSelector(state => state.offers)
    const offerList = offers.offers

    return (
        <StyledWrapper>
            <StyledCounter>
                <span className="counterName">{offerList.length}</span>
                <span className="counterTitle"> Angebote</span>
            </StyledCounter>
            <StyledOfferList>
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
            </StyledOfferList>
        </StyledWrapper>
    )

}

export default Offers


const StyledWrapper = styled.section({
    backgroundColor: '#ff5f00',
    padding: '1.25rem 0',
})

const StyledCounter = styled.div({
    '.counterName': {
        fontSize: '1.25rem;',
        fontWeight: '700',
    },
    '.counterTitle': {
        fontSize: '.75rem',
        fontWeight: '700',
    },
})

const StyledOfferList = styled.div({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
})

