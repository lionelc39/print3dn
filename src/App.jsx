import { useState } from 'react';
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
    serviceTitles: {
      prototipado: "Prototipado Rápido",
    },
    serviceDescriptions: {
      prototipado: "Creación de prototipos funcionales para pruebas y validación de diseños",
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Botones flotantes */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {isAdmin && (
          <button
            onClick={() => setShowConfig(!showConfig)}
            className="bg-gray-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <Settings className="w-6 h-6" />
          </button>
        )}
        <a
          href="https://www.instagram.com/print3d.n/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          {/* Instagram Icon */}
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
            <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162z"/>
            <circle cx="18.406" cy="5.594" r="1.44"/>
          </svg>
        </a>
        <a
          href="https://wa.me/5493489324301"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          {/* WhatsApp Icon */}
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
            <path d="M12.051 2.003c-5.45 0-9.884 4.434-9.884 9.884 0 1.84.51 3.637 1.479 5.2l-1.568 5.732 5.869-1.54a9.842 9.842 0 004.104.903h.002c5.45 0 9.885-4.434 9.885-9.885 0-2.641-1.03-5.122-2.898-6.99a9.828 9.828 0 00-6.989-2.899z"/>
          </svg>
        </a>
      </div>

      {/* Header */}
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">3D</span>
              </div>
              <h1 className="text-2xl font-bold text-foreground">Print3D.N</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#servicios" className="text-foreground hover:text-primary transition-colors">Servicios</a>
              <a href="#galeria" className="text-foreground hover:text-primary transition-colors">Galería</a>
              <a href="#contacto" className="text-foreground hover:text-primary transition-colors">Contacto</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Impresión 3D de <span className="text-primary">Calidad</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {businessData.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">Solicitar Cotización</Button>
            <Button variant="outline" size="lg">Ver Galería</Button>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>{businessData.serviceTitles.prototipado}</CardTitle>
                <CardDescription>Desarrollo de prototipos funcionales</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="/images/service-1.jpg" alt="Prototipos impresos en 3D" className="w-full h-48 object-cover rounded-lg mb-4" />
                <p className="text-muted-foreground">{businessData.serviceDescriptions.prototipado}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Piezas Personalizadas</CardTitle>
                <CardDescription>Diseños únicos a medida</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="/images/service-2.jpg" alt="Piezas personalizadas impresas en 3D" className="w-full h-48 object-cover rounded-lg mb-4" />
                <p className="text-muted-foreground">Fabricación de piezas personalizadas según tus especificaciones y necesidades</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Producción en Serie</CardTitle>
                <CardDescription>Fabricación de múltiples unidades</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="/images/service-3.jpg" alt="Producción en serie con impresión 3D" className="w-full h-48 object-cover rounded-lg mb-4" />
                <p className="text-muted-foreground">Producción a escala de piezas idénticas con consistencia y calidad garantizada</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section id="galeria" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Nuestro Trabajo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg"><img src="/images/gallery-1.jpg" alt="Escultura artística impresa en 3D" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" /></div>
            <div className="overflow-hidden rounded-lg"><img src="/images/gallery-2.jpg" alt="Ensamblaje mecánico impreso en 3D" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" /></div>
            <div className="overflow-hidden rounded-lg"><img src="/images/gallery-3.jpg" alt="Modelo arquitectónico impreso en 3D" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" /></div>
            <div className="overflow-hidden rounded-lg"><img src="/images/gallery-4.jpg" alt="Productos de consumo coloridos impresos en 3D" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" /></div>
            <div className="overflow-hidden rounded-lg"><img src="/images/gallery-5.jpg" alt="Prótesis médicas impresas en 3D" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" /></div>
            <div className="overflow-hidden rounded-lg"><img src="/images/gallery-6.jpg" alt="Piezas industriales impresas en 3D" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" /></div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Contáctanos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
                <p className="text-muted-foreground mb-4">Estamos aquí para ayudarte con tus proyectos de impresión 3D.</p>
                <div className="space-y-3">
                  <p className="flex items-center text-foreground">
                    <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {businessData.phone}
                  </p>
                  <p className="flex items-center text-foreground">
                    <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {businessData.email}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea id="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} required />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Enviar Mensaje</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Configuración */}
      {showConfig && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-2xl z-50 max-w-md w-full max-h-96 overflow-y-auto text-black">
          <h3 className="text-xl font-bold mb-4">Configuración</h3>
          <div className="space-y-4">
            <div>
              <Label>Subtítulo Principal</Label>
              <Textarea
                value={businessData.heroSubtitle}
                onChange={(e) => setBusinessData({ ...businessData, heroSubtitle: e.target.value })}
              />
            </div>
            <div>
              <Label>Teléfono</Label>
              <Input
                value={businessData.phone}
                onChange={(e) => setBusinessData({ ...businessData, phone: e.target.value })}
              />
            </div>
            <div>
              <Label>Email</Label>
              <Input
                value={businessData.email}
                onChange={(e) => setBusinessData({ ...businessData, email: e.target.value })}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Printing3DWebsite;

