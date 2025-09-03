import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products); 
    };

    getProduct();
  }, []);

    const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
  <div className="container my-5">
    <h2 className="mb-4 text-center">🛒 My Cart</h2>

    {products.length === 0 ? (
      <p className="text-center text-muted">Loading...</p>
    ) : (
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={product.images[0]}
                className="card-img-top p-3"
                alt={product.title}
                style={{ height: "250px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-muted">
                  {product.description.slice(0, 80)}...
                </p>
                <div className="mt-auto">
                  <h6 className="fw-bold mb-3">${product.price}</h6>
                  <button
                    className="btn btn-primary w-100 mb-2"
                    onClick={() => setCart([...cart, product])}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="btn btn-outline-danger w-100"
                    onClick={() =>
                      setCart(cart.filter((item) => item.id !== product.id))
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

}
