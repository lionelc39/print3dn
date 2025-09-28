import { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

const Catalogo = () => {
  const [productos, setProductos] = useState([]);
  const [cart, setCart] = useState([]);

  // Cargar productos desde JSON
  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error("Error cargando productos:", err));
  }, []);

  // Agregar producto al carrito
  const addToCart = (producto) => {
    setCart([...cart, producto]);
  };

  // Calcular total
  const total = cart.reduce((acc, item) => acc + item.precio, 0);

  return (
    <section id="catalogo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Catálogo</h2>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {productos.map((p) => (
            <Card key={p.id} className="shadow hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>{p.nombre}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <img
                  src={p.img}
                  alt={p.nombre}
                  className="w-full h-48 object-contain rounded mb-3 bg-white"
                />
                <p className="text-lg font-semibold">${p.precio}</p>
                <Button
                  className="mt-3 bg-primary hover:bg-primary/90 w-full"
                  onClick={() => addToCart(p)}
                >
                  Agregar al carrito
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Carrito */}
        <div className="mt-16 bg-white p-6 rounded shadow">
          <h3 className="text-2xl font-bold mb-4">Carrito de Compras</h3>
          {cart.length === 0 ? (
            <p className="text-gray-500">El carrito está vacío</p>
          ) : (
            <>
              <ul className="space-y-2">
                {cart.map((item, index) => (
                  <li key={index} className="flex justify-between border-b pb-2">
                    <span>{item.nombre}</span>
                    <span>${item.precio}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between mt-4 font-bold">
                <span>Total:</span>
                <span>${total}</span>
              </div>
              <div className="flex gap-4 mt-6">
                {/* Botón WhatsApp */}
                <a
                  href={`https://wa.me/5493489324301?text=Hola! Quiero hacer un pedido. Total: $${total}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-500 text-white px-4 py-2 rounded w-full text-center"
                >
                  Enviar por WhatsApp
                </a>
                {/* Botón Email */}
                <a
                  href={`mailto:print3d.n@gmail.com?subject=Pedido&body=Hola! Mi pedido es: ${cart
                    .map((c) => c.nombre + " $" + c.precio)
                    .join(", ")}. Total: $${total}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded w-full text-center"
                >
                  Enviar por Email
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Catalogo;
