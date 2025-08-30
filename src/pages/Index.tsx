import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { IngeMoveLogo } from "@/components/IngeMoveLogo";
import { VehicleCard } from "@/components/VehicleCard";
import { FeatureCard } from "@/components/FeatureCard";
import { ContactForm } from "@/components/ContactForm";
import { 
  Menu, X, ArrowRight, 
  Shield, Clock, CreditCard, 
  CheckCircle, Users, BarChart3,
  Star, MapPin, Calendar
} from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("vtc");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const vehicles = [
    {
      name: "Toyota Corolla",
      seats: "4",
      bags: "2",
      badge: "Confort",
      rating: 4.8,
      features: ["Climatisation", "GPS", "WiFi"]
    },
    {
      name: "Kia Ceed",
      seats: "4", 
      bags: "2",
      badge: "Compact",
      rating: 4.7
    },
    {
      name: "Hyundai Santa Fe 2024",
      seats: "6-7",
      bags: "4",
      badge: "SUV",
      rating: 4.9
    },
    {
      name: "Mercedes Vito",
      seats: "7-8",
      bags: "6",
      badge: "Van Business",
      rating: 4.8
    }
  ];

  const handleReservation = () => {
    toast.success("Redirection vers la réservation", {
      description: "Vous allez être redirigé vers notre plateforme de réservation."
    });
  };

  const handleQuote = () => {
    toast.info("Demande de devis", {
      description: "Un formulaire de devis va s'ouvrir."
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b shadow-soft">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <IngeMoveLogo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#vtc" className="hover:text-primary transition-smooth">VTC</a>
            <a href="#engineering" className="hover:text-primary transition-smooth">Ingénierie</a>
            <a href="#contact" className="hover:text-primary transition-smooth">Contact</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button asChild className="hidden sm:inline-flex">
              <a href="#contact">Demander un devis</a>
            </Button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur-lg">
            <nav className="px-4 py-6 flex flex-col gap-4">
              <a href="#vtc" className="py-2 hover:text-primary transition-smooth">VTC</a>
              <a href="#engineering" className="py-2 hover:text-primary transition-smooth">Ingénierie</a>
              <a href="#contact" className="py-2 hover:text-primary transition-smooth">Contact</a>
              <Button asChild className="mt-4">
                <a href="#contact">Demander un devis</a>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-section" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Ingénierie d'Excellence & 
              <span className="gradient-hero bg-clip-text text-transparent"> Mobilité Professionnelle</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Nous combinons missions d'ingénierie (industrie, qualité, consulting) et service VTC premium 
              pour entreprises et particuliers en France.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button variant="hero" size="lg" asChild>
                <a href="#vtc">
                  Réserver un VTC
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#engineering">Parler à un consultant</a>
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-success animate-pulse-glow" />
                <span className="text-muted-foreground">Disponible 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Couverture nationale</span>
              </div>
            </div>
          </div>
          
          <div className="fade-in relative">
            <div className="aspect-[4/3] rounded-3xl border shadow-strong gradient-card p-6">
              <div className="grid grid-cols-2 gap-4 h-full">
                {vehicles.slice(0, 4).map((vehicle, index) => (
                  <div 
                    key={vehicle.name} 
                    className={`rounded-2xl bg-background/80 border hover-lift p-4 animate-fade-in`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="text-xs text-muted-foreground mb-1">VTC</div>
                    <div className="font-semibold text-sm mb-2">{vehicle.name}</div>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-muted-foreground">{vehicle.rating}</span>
                    </div>
                    <div className="inline-flex items-center rounded-lg bg-secondary/20 text-secondary px-2 py-1 text-xs">
                      {vehicle.badge}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
            Nos Activités
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Activity Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <button
            onClick={() => setActiveTab("vtc")}
            className={`group rounded-2xl border p-6 text-left transition-smooth hover-lift ${
              activeTab === "vtc" ? "border-primary bg-primary/5" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-xl mb-2">Activité 1 · VTC & Chauffeur privé</h3>
                <p className="text-muted-foreground">
                  Transferts aéroports, mises à disposition, événements, business.
                </p>
              </div>
              <Button variant="secondary" size="sm">
                Réserver
              </Button>
            </div>
          </button>
          
          <button
            onClick={() => setActiveTab("engineering")}
            className={`group rounded-2xl border p-6 text-left transition-smooth hover-lift ${
              activeTab === "engineering" ? "border-primary bg-primary/5" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-xl mb-2">Activité 2 · Ingénierie & Qualité</h3>
                <p className="text-muted-foreground">
                  Consulting industrie : process, qualité, projets, performance.
                </p>
              </div>
              <Button variant="outline" size="sm">
                Consulter
              </Button>
            </div>
          </button>
        </div>

        {/* VTC Panel */}
        {activeTab === "vtc" && (
          <div id="vtc" className="fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {vehicles.map((vehicle) => (
                <VehicleCard
                  key={vehicle.name}
                  vehicle={vehicle}
                  onReserve={handleReservation}
                  onQuote={handleQuote}
                />
              ))}
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard
                icon={Shield}
                title="Chauffeurs professionnels"
                description="Certifiés & assurés, formation continue"
              />
              <FeatureCard
                icon={Clock}
                title="Suivi des vols"
                description="Temps d'attente inclus, monitoring en temps réel"
              />
              <FeatureCard
                icon={CreditCard}
                title="Facturation entreprise"
                description="Paiement sécurisé, factures détaillées"
              />
            </div>
          </div>
        )}

        {/* Engineering Panel */}
        {activeTab === "engineering" && (
          <div id="engineering" className="fade-in">
            <div className="rounded-3xl border shadow-medium gradient-section p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-bold mb-4">Consulting Ingénierie & Qualité</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Accompagnement des industriels (auto, énergie, ferroviaire, biens d'équipement) : 
                    performance, fiabilité et conformité réglementaire.
                  </p>
                  
                  <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                    {[
                      'Audit & Système de management de la qualité (ISO 9001, IATF 16949)',
                      'AMDEC / APQP / PPAP et industrialisation',
                      'Gestion de projet et PMO',
                      'Amélioration continue (Lean / Six Sigma)',
                      'Validation produit / process & plans de contrôle',
                      'Supply chain qualité & fournisseurs'
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button variant="default" size="lg" asChild>
                      <a href="#contact">
                        <Calendar className="h-4 w-4" />
                        Planifier un échange
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="#contact">Recevoir notre plaquette</a>
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="rounded-2xl border bg-card p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      <span className="text-sm uppercase tracking-wide text-muted-foreground">TJM Consulting</span>
                    </div>
                    <p className="font-bold text-2xl">à partir de 550€ HT</p>
                  </div>
                  
                  <div className="rounded-2xl border bg-card p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-sm uppercase tracking-wide text-muted-foreground">Démarrage mission</span>
                    </div>
                    <p className="font-bold text-2xl">Sous 7 jours</p>
                  </div>
                  
                  <div className="rounded-2xl border bg-card p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-sm uppercase tracking-wide text-muted-foreground">Couverture</span>
                    </div>
                    <p className="font-bold text-2xl">France entière</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section id="contact" className="gradient-section py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <IngeMoveLogo className="mb-4" />
              <p className="text-muted-foreground mb-4 max-w-md">
                Excellence en ingénierie et mobilité professionnelle. 
                Votre partenaire de confiance pour vos projets industriels et vos déplacements.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>© {new Date().getFullYear()} IngeMove</span>
                <span>•</span>
                <span>Tous droits réservés</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#vtc" className="hover:text-primary transition-smooth">VTC & Chauffeur</a></li>
                <li><a href="#engineering" className="hover:text-primary transition-smooth">Consulting Qualité</a></li>
                <li><a href="#engineering" className="hover:text-primary transition-smooth">Gestion de Projet</a></li>
                <li><a href="#contact" className="hover:text-primary transition-smooth">Audit & Formation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+33 6 00 00 00 00</li>
                <li>contact@ingemove.com</li>
                <li><a href="#" className="hover:text-primary transition-smooth">Mentions légales</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Politique de confidentialité</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;