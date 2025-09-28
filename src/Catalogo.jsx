import { useState } from "react";

const productos = [
  { id: 1, nombre: "Producto 1", precio: 2000, imagen: "/images/gallery-1.jpg" },
  { id: 2, nombre: "Producto 2", precio: 3500, imagen: "/images/gallery-2.jpg" },
  { id: 3, nombre: "Producto 3", precio: 1500, imagen: "/images/gallery-3.jpg" },
  { id: 4, nombre: "Producto 4", precio: 5000, imagen: "/images/gallery-4.jpg" },
  { id: 5, nombre: "Producto 5", precio: 2800, imagen: "/images/gallery-5.jpg" },
  { id: 6, nombre: "Producto 6", precio: 3200, imagen: "/images/gallery-6.jpg" },
  { id: 7, nombre: "Producto 7", precio: 4000, imagen: "/images/gallery-7.jpg" },
  { id: 8, nombre: "Producto 8", precio: 2200, imagen: "/images/gallery-8.jpg" },
];

export default function Catalogo() {
  const [carrito, setCarrito] = useState([]);
  const [medioPago, setMedioPago] = useState("Tarjeta");

  // Agregar producto con cantidad
  const agregarAlCarrito = (producto) => {
    const existe = carrito.find((p) => p.id === producto.id);
    if (existe) {
      setCarrito(
        carrito.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  // Modificar cantidad
  const cambiarCantidad = (id, delta) => {
    setCarrito(
      carrito
        .map((p) =>
          p.id === id ? { ...p, cantidad: Math.max(1, p.cantidad + delta) } : p
        )
    );
  };

  // Eliminar producto
  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((p) => p.id !== id));
  };

  // Calcular total
  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  // Enviar por WhatsApp
  const enviarWhatsApp = () => {
    if (carrito.length === 0) {
      alert("El carrito está vacío");
      return;
    }

    const resumen = carrito
      .map((p) => `${p.nombre} x${p.cantidad} - $${p.precio * p.cantidad}`)
      .join("%0A");

    const mensaje = `Hola! Quiero realizar esta compra:%0A${resumen}%0A%0ATotal: $${total}%0AMedio de pago: ${medioPago}`;
    const telefono = "5493489324301"; // <-- tu número con código de país
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, "_blank");
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Catálogo</h2>

        {/* Lista de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {productos.map((prod) => (
            <div
              key={prod.id}
              className="border rounded-lg p-4 shadow bg-white flex flex-col items-center"
            >
              <img
                src={prod.imagen}
                alt={prod.nombre}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="font-semibold">{prod.nombre}</h3>
              <p className="text-gray-600">${prod.precio}</p>
              <button
                onClick={() => agregarAlCarrito(prod)}
                className="mt-3 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
              >
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>

        {/* Carrito */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold mb-4">Carrito de compras</h3>
          {carrito.length === 0 ? (
            <p className="text-gray-500">El carrito está vacío</p>
          ) : (
            <div className="space-y-4">
              {carrito.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <div>
                    <p className="font-semibold">{item.nombre}</p>
                    <p className="text-sm text-gray-600">
                      ${item.precio} c/u
                    </p>
                  </div>

                  {/* Cantidad */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => cambiarCantidad(item.id, -1)}
                      className="px-2 py-1 bg-gray-300 rounded"
                    >
                      -
                    </button>
                    <span>{item.cantidad}</span>
                    <button
                      onClick={() => cambiarCantidad(item.id, 1)}
                      className="px-2 py-1 bg-gray-300 rounded"
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal */}
                  <p className="w-24 text-right">
                    ${item.precio * item.cantidad}
                  </p>

                  {/* Eliminar */}
                  <button
                    onClick={() => eliminarDelCarrito(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    ❌
                  </button>
                </div>
              ))}

              {/* Total */}
              <div className="flex justify-between font-bold text-lg pt-4">
                <span>Total:</span>
                <span>${total}</span>
              </div>

              {/* Medio de pago */}
              <div>
                <label className="block font-semibold mb-1">
                  Medio de pago:
                </label>
                <select
                  value={medioPago}
                  onChange={(e) => setMedioPago(e.target.value)}
                  className="border rounded px-3 py-2"
                >
                  <option>Tarjeta</option>
                  <option>Transferencia</option>
                  <option>Efectivo</option>
                </select>
              </div>

              {/* Botón WhatsApp */}
              <button
                onClick={enviarWhatsApp}
                className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700"
              >
                Enviar pedido por WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
