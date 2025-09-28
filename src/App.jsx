import { useState, useEffect } from 'react';
import { Button } from "./components/ui/button";
import { Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";

const Printing3DWebsite = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showConfig, setShowConfig] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [businessData, setBusinessData] = useState({
    heroSubtitle: "Transformamos tus ideas en realidad con nuestra tecnología de impresión 3D profesional",
    phone: "+54 9 3489 324301",
    email: "print3d.n@gmail.com",
    serviceTitles: { prototipado: "Prototipado Rápido" },
    serviceDescriptions: { prototipado: "Creación de prototipos funcionales para pruebas y validación de diseños" }
  });

  // cargar guardado en localStorage (opcional)
  useEffect(() => {
    const saved = localStorage.getItem('print3d_business');
    if (saved) setBusinessData(JSON.parse(saved));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: conectar a endpoint /api/contact para enviar mail o guardar.
    console.log({ name, email, message });
    setName(''); setEmail(''); setMessage('');
    alert('Mensaje enviado (simulado).');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {isAdmin && (
          <button onClick={() => setShowConfig(!showConfig)} className="bg-gray-600 text-white p-3 rounded-full">
            <Settings className="w-5 h-5" />
          </button>
        )}
        <a href="https://www.instagram.com/print3d.n/" target="_blank" rel="noreferrer" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 rounded-full">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919z"/><path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162z"/><circle cx="18.406" cy="5.594" r="1.44"/></svg>
        </a>
        <a href="https://wa.me/5493489324301" target="_blank" rel="noreferrer" className="bg-green-500 text-white p-3 rounded-full">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/><path d="M12.051 2.003c-5.45 0-9.884 4.434-9.884 9.884 0 1.84.51 3.637 1.479 5.2l-1.568 5.732 5.869-1.54a9.842 9.842 0 004.104.903h.002c5.45 0 9.885-4.434 9.885-9.885 0-2.641-1.03-5.122-2.898-6.99a9.828 9.828 0 00-6.989-2.899z"/></svg>
        </a>
      </div>

      {/* Header */}
      <header className="bg-background border-b border-gray-200">
        <div className="container mx-auto py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">3D</div>
            <h1 className="text-2xl font-bold">Print3D.N</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#servicios">Servicios</a>
            <a href="#galeria">Galería</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Impresión 3D de <span className="text-primary">Calidad</span></h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">{businessData.heroSubtitle}</p>
          <div className="flex justify-center gap-4">
            <Button size="lg">Solicitar Cotización</Button>
            <Button variant="outline">Ver Galería</Button>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-8">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Nuestros Servicios</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>{businessData.serviceTitles.prototipado}</CardTitle>
                <CardDescription>Desarrollo de prototipos funcionales</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="/images/service-1.jpg" alt="Servicio prototipo" className="w-full h-48 object-cover rounded" />
                <p className="mt-3 text-muted">{businessData.serviceDescriptions.prototipado}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Piezas Personalizadas</CardTitle><CardDescription>Diseños únicos</CardDescription></CardHeader>
              <CardContent>
                <img src="/images/service-2.jpg" alt="Piezas" className="w-full h-48 object-cover rounded" />
                <p className="mt-3 text-muted">Fabricación a medida</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Producción en Serie</CardTitle><CardDescription>Volúmenes medios</CardDescription></CardHeader>
              <CardContent>
                <img src="/images/service-3.jpg" alt="Producción" className="w-full h-48 object-cover rounded" />
                <p className="mt-3 text-muted">Producción a escala</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

{/* --- Galería expandida: Nuestro Trabajo (9 imágenes) --- */}
<section id="galeria" className="py-20 bg-muted">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-foreground mb-12">Nuestro Trabajo</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* Repetir imagenes 1..9 */}
      {Array.from({length:9}, (_,i)=> i+1).map(n => (
        <div className="overflow-hidden rounded-lg shadow-sm" key={n}>
          <img
            src={`/images/gallery-${n}.jpg`}
            alt={`Trabajo ${n}`}
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            onError={(e)=> { e.target.src = '/images/gallery-placeholder.jpg'; }}
          />
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contacto */}
      <section id="contacto" className="py-8">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Contáctanos</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Información</h4>
              <p className="text-muted mb-4">Estamos aquí para ayudarte.</p>
              <p className="mb-1"><strong>Tel:</strong> {businessData.phone}</p>
              <p><strong>Email:</strong> {businessData.email}</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" value={name} onChange={(e)=>setName(e.target.value)} required />
              </div>
              <div className="mb-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
              </div>
              <div className="mb-3">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" rows={4} value={message} onChange={(e)=>setMessage(e.target.value)} required />
              </div>
              <Button type="submit">Enviar Mensaje</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Config modal */}
      {showConfig && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded max-w-md w-full">
            <h4 className="font-bold mb-4">Configuración</h4>
            <Label>Subtítulo</Label>
            <Textarea value={businessData.heroSubtitle} onChange={(e)=>setBusinessData({...businessData, heroSubtitle: e.target.value})} />
            <Label>Teléfono</Label>
            <Input value={businessData.phone} onChange={(e)=>setBusinessData({...businessData, phone: e.target.value})} />
            <Label>Email</Label>
            <Input value={businessData.email} onChange={(e)=>setBusinessData({...businessData, email: e.target.value})} />
            <div className="mt-4 flex gap-2">
              <Button onClick={() => { localStorage.setItem('print3d_business', JSON.stringify(businessData)); setShowConfig(false); }}>Guardar</Button>
              <Button variant="outline" onClick={() => setShowConfig(false)}>Cancelar</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Printing3DWebsite;
