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
                    <StyledItemWrapper key={item.id}>
                    <OfferItem 
                        description={item.headlines.description}
                        shortSubline={item.headlines.shortSubline}
                        imageUrl={item.carGroupInfo.modelExample.imageUrl}
                        mileageInfo={item.mileageInfo.display}
                        dayPrice={item.prices.dayPrice}
                        totalPrice={item.prices.totalPrice}
                    />
                    </StyledItemWrapper>
                ))}
            </StyledOfferList>
        </StyledWrapper>
    )

}

export default Offers


const StyledWrapper = styled.section({
    backgroundColor: 'rgb(242,242,242)',
    padding: '1.25rem 0.5rem',
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
    justifyContent: 'flex-start',
})

const StyledItemWrapper = styled.div({
    padding: '0.5rem',
    margin: '0',
    width: '100%',
    height: 'auto',
    aspectRatio: '1 / 1',
    '@media(min-width: 499px)': {
        width: '50%',
    },
    '@media(min-width: 780px)': {
        width: '33.33%',
    },
    '@media(min-width: 992px)': {
        width: '25%',
    },

})

