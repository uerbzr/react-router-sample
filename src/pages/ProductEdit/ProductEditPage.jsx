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
    console.log("name", name);
    console.log("value", value);
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
      <label htmlFor="name">
        Product Name
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={productToUpdate.name}
          className="form-control"
        />
      </label>
      <br />
      <br />
      <label htmlFor="type">
        Product Type
        <input
          type="text"
          id="type"
          name="type"
          onChange={handleChange}
          value={productToUpdate.type}
          className="form-control"
        />
      </label>

      <br />
      <br />
      <label htmlFor="price">
        Product Price
        <input
          type="text"
          id="price"
          name="price"
          onChange={handleChange}
          value={productToUpdate.price}
          className="form-control"
        />
      </label>
      <br />
      <br />
      <label htmlFor="quantity">
        quantity
        <input
          type="text"
          id="quantity"
          name="prquantityice"
          onChange={handleChange}
          value={productToUpdate.inventory.quantity}
          className="form-control"
        />
      </label>
      <br />
      <br />
      <button className="btn btn-success" type="submit">
        Update
      </button>
      <button className="btn btn-danger" onClick={() => navigate(`/products`)}>
        Cancel
      </button>
    </form>
  );
}

export default ProductEditPage;
