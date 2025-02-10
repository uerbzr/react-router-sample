import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductEditPage(props) {
  const [productToUpdate, setProductToUpdate] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, setProducts } = props;

  useEffect(() => {
    setProductToUpdate(
      products.find((product) => Number(product.id) === Number(id))
    );
  }, []);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setProductToUpdate({ ...productToUpdate, [name]: value });
  }

  function handleSubmit(event) {
    let _products = [...products];
    _products = _products.filter(
      (product) => product.id !== productToUpdate.id
    );

    setProducts([
      ..._products,
      {
        id: productToUpdate.id,
        name: productToUpdate.name,
        type: productToUpdate.type,
        price: productToUpdate.price,
        inventory: {
          quantity: 100,
          incomingDelivery: false,
        },
      },
    ]);
    event.preventDefault();
    navigate(`/products`);
  }

  console.log(productToUpdate);
  if (!productToUpdate) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Product Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={productToUpdate.name}
        className="form-control"
      />
      <button className="btn btn-success" type="submit">
        Update
      </button>
    </form>
  );
}

export default ProductEditPage;
