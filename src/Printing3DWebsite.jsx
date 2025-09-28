import { useState, useEffect } from 'react';
import { Button } from "./components/ui/button";
import { Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";

const Printing3DWebsite = () => {
  const [showConfig, setShowConfig] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [businessData, setBusinessData] = useState({
    heroSubtitle: "Transformamos tus ideas en realidad con nuestra tecnología de impresión 3D profesional",
    phone: "+54 9 3489 324301",
    email: "print3d.n@gmail.com",
    serviceTitles: { prototipado: "Prototipado Rápido" },
    serviceDescriptions: { prototipado: "Creación de prototipos funcionales para pruebas y validación de diseños" }
  });

  useEffect(() => {
    const saved = localStorage.getItem('print3d_business');
    if (saved) setBusinessData(JSON.parse(saved));
  }, []);

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
          IG
        </a>
        <a href="https://wa.me/5493489324301" target="_blank" rel="noreferrer" className="bg-green-500 text-white p-3 rounded-full">
          WA
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

      {/* Galería */}
      <section id="galeria" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestro Trabajo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div key={n} className="overflow-hidden rounded-lg shadow-sm bg-white flex items-center justify-center">
                <img
                  src={`/images/gallery-${n}.jpg`}
                  alt={`Trabajo ${n}`}
                  className="w-full h-64 object-cover transform scale-95 hover:scale-100 transition-transform duration-300 bg-white"
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
            <form action="https://formspree.io/f/mblzderr" method="POST" className="space-y-4">
              <div>
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" type="text" name="name" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" name="email" required />
              </div>
              <div>
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" name="message" rows={4} required />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Printing3DWebsite;
