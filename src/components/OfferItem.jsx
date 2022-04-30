import PropTypes from 'prop-types'

const OfferItem = (props) => {
    const {description, shortSubline, imageUrl, dayPrice, totalPrice} = props
    console.log(props)
    const price = dayPrice.amount.display.split(',')
    const priceEuro = price[0] || '0' 
    const priceCents = price[1] || '00' 
    const currency = (totalPrice.amount.currency === 'EUR')? '€' : totalPrice.amount.currency

    return (
        <div>
            <div>{description}</div>
            <div>{shortSubline}</div>
            <div><img src={imageUrl} alt={description} /></div>
            <div>
                <span>{currency} </span>
                <span>{priceEuro}</span>
                <span>,{priceCents}</span>
                <span>{' | ' + dayPrice.unit}</span>
            </div>
            <div>{currency} {totalPrice.amount.display} {totalPrice.unit}</div>
        </div>
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