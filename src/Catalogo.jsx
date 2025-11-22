import { useState } from "react";
import { Button } from "./components/ui/button";

const Catalogo = () => {
  // Lista de productos
  const productos = [
    {
      id: 1,
      nombre: "Lámpara Lumi",
      descripcion: "Lámpara decorativa impresa en 3D. Ideal para ambientar espacios. Altura 24 cm , diametro de base 11.5 cm. ",
      precio: 70000,
      imagen: "/images/gallery-1.jpg",
    },
    {
      id: 2,
      nombre: "Llavero de gatitos",
      descripcion: "Dos gatitos que encajan en una casita, ideal para organizar tus llaves con estilo. Los colores son ilustrativos",
      precio: 18000,
      imagen: "/images/gallery-2.jpg",
    },
    {
      id: 3,
      nombre: "Manopla llavero Cat",
      descripcion: "Diseño ergonómico en forma de gato, práctico para llevar en la mano y brindar seguridad en todo momento.",
      precio: 5800,
      imagen: "/images/gallery-3.jpg",
    },
    {
      id: 4,
      nombre: "Sello Sol de Mayo",
      descripcion: "Sello 3D para cerámica. Ideal para estampar un diseño icónico y detallado.(8x8 cm)",
      precio: 8000,
      imagen: "/images/gallery-4.jpg",
    },
    {
      id: 5,
      nombre: "Set 3 Cortantes Argentina (Norte, Centro, Sur)",
      descripcion: "Cortantes para ceramica. El color es ilustrativo y puede variar.",
      precio: 15000,
      imagen: "/images/gallery-9.jpg",
    },   
  {
    id: 6,  
    nombre: "Porta-Gafas Cocodrilo",
    descripcion: "Mantén tus lentes seguros y siempre a la vista con este original soporte de cocodrilo",
    precio: 18000,
    imagen: "/images/gallery-10.jpg",
  },
  {
    id: 7,  
    nombre: "Lampara Lumi soft",
    descripcion: "Lámpara decorativa impresa en 3D. Altura 22 cm. Diametro de base 11,5 cm ",
    precio: 60000,
    imagen: "/images/gallery-11.jpg",
 },  
 {
    id: 8,  
    nombre: "Sello Personalizado",
    descripcion: "Sello 3D Personalizado con tu Diseño o Iniciales. La herramienta ideal para estampar tu marca personal en ceramica o pinturas ",
    precio: 0,
    imagen: "/images/gallery-12.jpg",
 },
  {
    id: 9,  
    nombre: "Posavasos Monstera",
    descripcion: "Dale un toque tropical y moderno a tu hogar con este set de posavasos Monstera. Protege tus superficies con estilo",
    precio: 10000,
    imagen: "/images/gallery-13.jpg",   
 },   
   {
    id: 10,  
    nombre: "Soporte para Auriculares",
    descripcion: "Este soporte para auriculares es el accesorio que necesitás para mantener tu espacio de trabajo o setup ordenado y prolijo.",
    precio: 15000,
    imagen: "/images/gallery-14.jpg",   
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

    const mensaje = `¡Hola! 👋 Quiero hacer este pedido:\n\n${productos}\n\n💰 Total de la compra: $${total}\n\nPor favor, completá los siguientes datos:\n\n📝 Nombre y Apellido:\n🆔 DNI:\n📦 Envío o Retiro:\n📍 Dirección (si es envío):\n📞 Número de contacto:\n\n¡En breve contestaremos tu mensaje, muchas gracias! 😊`;

    window.open(`https://wa.me/5493489324301?text=${encodeURI(mensaje)}`, "_blank");
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
                className={`w-full h-48 ${
                  producto.id === 5 || producto.id === 7 || producto.id === 9 || producto.id === 10
                    ? 'object-contain bg-gray-50 p-2' 
                    : 'object-cover'
                }`}
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
