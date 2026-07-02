import "./CollectionSection.css";

import product1 from "../../assets/images/grey.png";
import product2 from "../../assets/images/grey.png";
import product3 from "../../assets/images/grey.png";
import product4 from "../../assets/images/grey.png";

const products = [
  {
    code: "AM-001",
    name: "THE DAILY TEE",
    image: product1,
  },
  {
    code: "AM-101",
    name: "THE VOID HOODIE",
    image: product2,
  },
  {
    code: "AM-201",
    name: "THE EASY TROUSER",
    image: product3,
  },
  {
    code: "AM-102",
    name: "THE WIDE CARGO",
    image: product4,
  },
];

function CollectionSection() {
  return (
    <section className="collection">


      <div className="collection-header">
  <span>COLLECTION SEASON 01</span>
  <div className="header-line"></div>
</div>

      <div className="collection-grid">
        {products.map((product) => (
          <div className="product-card" key={product.code}>

            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="product-info">
              <p className="product-code">{product.code}</p>
              <h3>{product.name}</h3>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default CollectionSection;