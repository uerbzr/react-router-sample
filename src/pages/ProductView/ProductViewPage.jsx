import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductViewPage(props) {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = props;

  useEffect(() => {
    if (products && id) {
      setProduct(products.find((product) => Number(product.id) === Number(id)));
    }
  }, [products, id]);

  if (!product) return <p>No such product with ID: {id}</p>;

  return (
    <div>
      <nav>
        <button onClick={() => navigate("/")}>Go Home</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
        <button onClick={() => navigate(1)}>Go Forward</button>
      </nav>
      <section>
        <h2>
          {product.name}
          <em> (ID: {product.id})</em>
        </h2>
        <p>£{product.price}</p>
      </section>
    </div>
  );
}

export default ProductViewPage;
