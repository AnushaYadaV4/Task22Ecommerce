import { useParams } from "react-router-dom";
import product from "./product";
import Button from "react-bootstrap/Button";
import classes from "./ProductDetails.module.css";
import ReactImageMagnify from "react-image-magnify";
import { FcRating} from 'react-icons/fc';


const ProductDetails = () => {
  const params = useParams();
  console.log(params.productId);

  const { productId } = useParams();
  const products = product.find((product) => product.id === productId);
  const { imageUrl, title, price } = products;
  return (
    <div className={classes.card1}>
      <div style={{ width: "542px", height: "513px", margin: "25px" }}>
        <ReactImageMagnify
          {...{
            smallImage: {
              isFluidWidth: true,
              src: imageUrl,
            },
            largeImage: {
              src: imageUrl,
              width: 1200,
              height: 1800,
            },
          }}
        />

        <span>
          <Button className={classes.button} variant="warning">
            Add To Cart
          </Button>
          <Button className={classes.button} variant="danger">
            Buy Now
          </Button>
        </span>
      </div>

      <div className={classes.bgContainer}>
        <div className={classes.pricingPlanCardContainer}>
          <div className={classes.pricingPlanCard,classes.text}>
            <img src="" />
            <h1>{title}</h1>
            <h1>₹{price}</h1>
            <h2>Available offers</h2>
            <ul>
              <li>Special PriceGet at flat ₹329T&C</li>

              <li>
                Partner OfferPurchase now & get a surprise cashback coupon for
                January / February 2023Know More
              </li>
              <li>
                Partner OfferSign up for Flipkart Pay Later and get Flipkart
                Gift Card worth up to ₹500*Know More
              </li>
              <li>
                Bank Offer10% off on Kotak Bank Credit Cards and Credit EMI
                Trxns, up to ₹1,500. On orders of ₹5,000 and aboveT&C +3 more
                offers
              </li>
              
            </ul>
            <div>
              <p>Rating</p>
            <FcRating /><FcRating/><FcRating/>
        </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
