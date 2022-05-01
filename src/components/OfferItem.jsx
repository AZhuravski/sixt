import styled from "@emotion/styled";
import PropTypes from "prop-types";
import defaultCarImage from "../assets/images/defaultCarImage.jpg";

const OfferItem = (props) => {
  const { description, shortSubline, imageUrl, dayPrice, totalPrice } = props;
  const price = dayPrice.amount.display.split(",");
  const priceEuro = price[0] || "0";
  const priceCents = price[1] || "00";
  const currency =
    totalPrice.amount.currency === "EUR" ? "€" : totalPrice.amount.currency;
  const offerImageUrl = imageUrl ? imageUrl : defaultCarImage;

  return (
    <StyledOfferItem>
      <StyledTitle>{description}</StyledTitle>
      <StyledSubTitle>{shortSubline}</StyledSubTitle>
      <StyledImage bgUrl={"url(" + offerImageUrl + ")"} />
      <StyledPriceWrapper color={"orange"}>
        <span>{currency} </span>
        <span className="bigPrice">{priceEuro}</span>
        <span>,{priceCents}</span>
        <span>{" | " + dayPrice.unit}</span>
      </StyledPriceWrapper>
      <StyledPriceWrapper color={"black"}>
        <span>{currency} </span>
        {totalPrice.amount.display} {totalPrice.unit}
      </StyledPriceWrapper>
    </StyledOfferItem>
  );
};

OfferItem.propTypes = {
  description: PropTypes.string,
  shortSubline: PropTypes.string,
  imageUrl: PropTypes.string,
  mileageInfo: PropTypes.string,
  dayPrice: PropTypes.object,
  totalPrice: PropTypes.object,
};

export default OfferItem;

// Component Styles

const StyledOfferItem = styled.div({
  display: "flex",
  width: "100%",
  height: "100%",
  backgroundColor: "#FFF",
  cursor: "pointer",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "1rem",
  boxShadow:
    "rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
});

const StyledTitle = styled.div({
  fontSize: "2rem",
  lineHeight: "normal",
  color: "rgb(25,25,25)",
  fontWeight: 700,
  padding: "0.15rem 0",
  position: "relative",
  textTransform: "uppercase",
});

const StyledSubTitle = styled.div({
  fontSize: ".90rem",
});

const StyledImage = styled.div((props) => ({
  backgroundImage: props.bgUrl,
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center, center",
  flexGrow: 3,
  transition: "all 0.5s ease",
  "&:hover": {
    backgroundSize: "110%",
  },
}));

const StyledPriceWrapper = styled.div((props) => ({
  color: props.color === "orange" ? "rgb(255,95,0)" : "rgb(25,25,25)",
  fontSize: "1.25rem",
  fontWeight: 700,
  ".bigPrice": {
    fontSize: "2.5rem",
  },
}));
