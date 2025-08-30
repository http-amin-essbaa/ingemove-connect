import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Message envoyé avec succès !", {
      description: "Nous vous recontacterons dans les plus brefs délais."
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      <div>
        <h3 className="text-3xl font-bold mb-4">Contact & Devis</h3>
        <p className="text-lg text-muted-foreground mb-8">
          Dites‑nous votre besoin : réservation VTC ou mission d'ingénierie. 
          Nous revenons vers vous rapidement.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border bg-card p-5 hover-lift transition-smooth">
            <div className="flex items-center gap-3 mb-2">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">Téléphone</span>
            </div>
            <p className="font-semibold text-lg">+33 6 00 00 00 00</p>
          </div>
          
          <div className="rounded-2xl border bg-card p-5 hover-lift transition-smooth">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">E‑mail</span>
            </div>
            <p className="font-semibold text-lg">contact@ingemove.com</p>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="rounded-3xl border bg-card shadow-medium p-8">
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nom</Label>
            <Input 
              id="name"
              type="text" 
              placeholder="Votre nom" 
              required
              className="rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E‑mail</Label>
            <Input 
              id="email"
              type="email" 
              placeholder="vous@domaine.fr" 
              required
              className="rounded-xl"
            />
          </div>
        </div>
        
        <div className="space-y-2 mb-6">
          <Label htmlFor="request-type">Type de demande</Label>
          <Select>
            <SelectTrigger className="rounded-xl">
              <SelectValue placeholder="Sélectionnez votre demande" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vtc">Réservation VTC</SelectItem>
              <SelectItem value="engineering">Mission d'ingénierie</SelectItem>
              <SelectItem value="other">Autre</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2 mb-6">
          <Label htmlFor="message">Message</Label>
          <Textarea 
            id="message"
            rows={5} 
            placeholder="Précisez vos dates, lieu, besoin technique, etc." 
            required
            className="rounded-xl"
          />
        </div>
        
        <Button 
          type="submit" 
          variant="hero" 
          size="lg" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Envoi en cours..."
          ) : (
            <>
              <Send className="h-4 w-4" />
              Envoyer
            </>
          )}
        </Button>
      </form>
    </div>
  );
};