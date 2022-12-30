import classes from "./AvailableProduct.module.css";
import Card from "../UI/Card";
import ProductItems from "./productItems/ProductItems";
import Footer from "../layouts/Footer";
import Layout from "../layouts/Layout";
import SocialMedias from "../pages/SocialMedias";
const productsArr = [
  {
    id: "p1",

    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "p2",

    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: "p3",

    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: "p4",

    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const AvailableProducts = () => {
  const productList = productsArr.map((product) => (
    <ProductItems
      key={product.id}
      id={product.id}
      imageUrl={product.imageUrl} 
      title={product.title}
      price={product.price}
    />
  ));

  return (
    <div>
      <Layout/>
    <section className={classes.meals}>
      <Card>
        <ul className="productsContainer">{productList}</ul>
      </Card>
      <SocialMedias/>
    </section>
    </div>
  );
};

export default AvailableProducts;
