import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const OfferItem = (props) => {
    const {description, shortSubline, imageUrl, dayPrice, totalPrice} = props
    const price = dayPrice.amount.display.split(',')
    const priceEuro = price[0] || '0' 
    const priceCents = price[1] || '00' 
    const currency = (totalPrice.amount.currency === 'EUR')? '€' : totalPrice.amount.currency

    return (
        <StyledOfferItem>
            <StyledTitle>
                {description}
            </StyledTitle>
            <StyledSubTitle>
                {shortSubline}
            </StyledSubTitle>
            <StyledImage bgUrl={'url(' + imageUrl + ')'}>
                {/* <img src={imageUrl} alt={description} /> */}
            </StyledImage>
            <div>
                <span>{currency} </span>
                <span>{priceEuro}</span>
                <span>,{priceCents}</span>
                <span>{' | ' + dayPrice.unit}</span>
            </div>
            <div>{currency} {totalPrice.amount.display} {totalPrice.unit}</div>
        </StyledOfferItem>
    )
}

OfferItem.propTypes = {
    description: PropTypes.string,
    shortSubline: PropTypes.string,
    imageUrl: PropTypes.string,
    mileageInfo: PropTypes.string,
    dayPrice: PropTypes.object,
    totalPrice: PropTypes.object,
}

export default OfferItem


const StyledOfferItem = styled.div({
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF',
    cursor: 'pointer',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '1rem',
    boxShadow: 'rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 12%) 0px 1px 5px 0px',
})

const StyledTitle = styled.div({
    color: 'rgb(25,25,25)',
    fontWeight: 700,
    padding: '0.15rem 0',
    position: 'relative',
    textTransform: 'uppercase',
})

const StyledSubTitle = styled.div({
    fontSize: '.75rem',
})

const StyledImage = styled.div(props => ({
    backgroundImage: props.bgUrl,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center, center',
    flexGrow: 3,
}))