import { useState } from "react";
import { Button } from "./components/ui/button";

const Catalogo = () => {
  // Lista de productos
  const productos = [
    {
      id: 1,
      nombre: "Corazón anatómico",
      descripcion: "Modelo 3D decorativo o educativo, impreso en PLA de alta calidad.",
      precio: 3500,
      imagen: "/images/gallery-1.jpg",
    },
    {
      id: 2,
      nombre: "Spiderman Mini Duo",
      descripcion: "Pareja de figuras articuladas de Spiderman. Altura: 10 cm.",
      precio: 4500,
      imagen: "/images/gallery-2.jpg",
    },
    {
      id: 3,
      nombre: "Lámpara Espiral",
      descripcion: "Lámpara decorativa impresa en 3D. Ideal para ambientar espacios.",
      precio: 5800,
      imagen: "/images/gallery-3.jpg",
    },
    {
      id: 4,
      nombre: "Llaveros Personalizados",
      descripcion: "Llaveros con tu nombre o logo. Personalizables en colores.",
      precio: 1200,
      imagen: "/images/gallery-4.jpg",
    },
  ];

  // Estado del carrito
  const [carrito, setCarrito] = useState([]);
  const [botonesActivos, setBotonesActivos] = useState({});

  // Función para agregar al carrito
  const agregarAlCarrito = (producto, cantidad) => {
    setCarrito((prev) => {
      const existente = prev.find((item) => item.id === producto.id);
      if (existente) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      }
      return [...prev, { ...producto, cantidad }];
    });

    // Cambia el botón temporalmente a "Agregado"
    setBotonesActivos((prev) => ({ ...prev, [producto.id]: true }));
    setTimeout(
      () => setBotonesActivos((prev) => ({ ...prev, [producto.id]: false })),
      1500
    );
  };

  // Eliminar producto del carrito
  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  // Calcular total
  const total = carrito.reduce((sum, p) => sum + p.precio * p.cantidad, 0);

  // 🟢 Enviar pedido por WhatsApp 
const enviarPorWhatsApp = () => {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  const productos = carrito
    .map((p) => `• ${p.nombre} (x${p.cantidad}) - $${p.precio * p.cantidad}`)
    .join("\n");

  const mensaje = `¡Hola! 👋 Quiero hacer este pedido:\n\n${productos}\n\nPor favor, completá los siguientes datos:\n\n📝 Nombre y Apellido:\n🆔 DNI:\n📦 Envío o Retiro:\n📍 Dirección (si es envío):\n📞 Número de contacto:\n\n¡En breve contestaremos tu mensaje, muchas gracias! 😊`;

  // 🔹 Usamos encodeURI (NO encodeURIComponent) para conservar emojis y formato
  const url = `https://wa.me/5493489324301?text=${encodeURI(mensaje)}`;


    window.open(
      `https://wa.me/5493489324301?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
  };

  return (
    <section id="catalogo" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Catálogo</h2>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {productos.map((producto) => (
            <div
              key={producto.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between hover:shadow-lg transition"
            >
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg mb-1 text-gray-800">
                  {producto.nombre}
                </h3>
                <p className="text-gray-600 text-sm flex-grow">
                  {producto.descripcion}
                </p>
                <p className="mt-2 font-bold text-primary">${producto.precio}</p>

                {/* Selector de cantidad */}
                <div className="flex items-center justify-between mt-4">
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-16 border rounded p-1 text-center text-gray-700"
                    id={`cantidad-${producto.id}`}
                  />

                  <Button
                    className={`transition-all ${
                      botonesActivos[producto.id]
                        ? "bg-green-600 text-white"
                        : "bg-primary hover:bg-primary/90"
                    }`}
                    onClick={() => {
                      const cantidad = parseInt(
                        document.getElementById(`cantidad-${producto.id}`).value
                      );
                      agregarAlCarrito(producto, cantidad);
                    }}
                  >
                    {botonesActivos[producto.id] ? "Agregado ✅" : "Agregar"}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🛒 Carrito */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">🛍️ Tu Carrito</h3>

          {/* 📦 Información de envío */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 text-sm text-gray-700">
            <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
              📦 Opciones de Envío
            </h4>
            <p>
              Por el momento realizamos envíos únicamente a:
              <ul className="list-disc list-inside mt-2">
                <li>Zárate</li>
                <li>Campana</li>
                <li>Facultad de Ciencias Veterinarias</li>
              </ul>
            </p>
            <p className="mt-2 font-medium text-gray-800">
              También disponible:{" "}
              <span className="text-primary font-bold">Retiro en local</span>
            </p>
          </div>

          {carrito.length === 0 ? (
            <p className="text-gray-600">Aún no agregaste productos.</p>
          ) : (
            <>
              <ul className="divide-y">
                {carrito.map((item) => (
                  <li
                    key={item.id}
                    className="py-3 flex justify-between items-center"
                  >
                    <div>
                      <p className="font-semibold text-gray-800">
                        {item.nombre} (x{item.cantidad})
                      </p>
                      <p className="text-sm text-gray-500">
                        ${item.precio * item.cantidad}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
                      onClick={() => eliminarDelCarrito(item.id)}
                    >
                      Eliminar
                    </Button>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex justify-between items-center border-t pt-4">
                <p className="text-xl font-bold">Total: ${total}</p>

                <Button
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={enviarPorWhatsApp}
                >
                  Enviar por WhatsApp 📲
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Catalogo;
