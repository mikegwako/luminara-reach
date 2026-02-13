import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Phone, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import FadeInSection from "@/components/FadeInSection";
import { useToast } from "@/hooks/use-toast";

const serviceOptions = [
  { id: "seo", label: "SEO & Search Visibility" },
  { id: "social", label: "Social Media Management" },
  { id: "customer-care", label: "Customer Care & Support" },
  { id: "outreach", label: "Email & Digital Outreach" },
  { id: "full-package", label: "The Complete Growth Package" },
  { id: "not-sure", label: "Not Sure Yet / Consultation" },
];

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    budget: "",
  });

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "ed4dbb20-334f-4042-8089-e4bf502fb9b2",
          subject: "New Luminara Reach Inquiry",
          from_name: formData.name,
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          services: selectedServices.map((id) => serviceOptions.find((s) => s.id === id)?.label).join(", "),
          message: formData.message,
          budget: formData.budget,
        }),
      });

      if (response.ok) {
        navigate("/thank-you");
      } else {
        throw new Error("Failed to submit");
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection>
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-secondary">Contact Us</p>
            </FadeInSection>
            <FadeInSection delay={100}>
              <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
                Reach Out,{" "}
                <span className="text-primary">We'll Reach Back</span>
              </h1>
            </FadeInSection>
            <FadeInSection delay={200}>
              <p className="text-lg text-muted-foreground">
                Tell us about your business and goals. We'll respond within 24 hours.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <FadeInSection>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input id="name" required value={formData.name} onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" value={formData.company} onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))} />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))} />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Primary Interest *</Label>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {serviceOptions.map((option) => (
                        <label
                          key={option.id}
                          className="flex cursor-pointer items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-muted"
                        >
                          <Checkbox
                            checked={selectedServices.includes(option.id)}
                            onCheckedChange={() => toggleService(option.id)}
                          />
                          <span className="text-sm text-foreground">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">What's your biggest digital challenge right now? *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Monthly Investment Range</Label>
                    <Select value={formData.budget} onValueChange={(v) => setFormData((p) => ({ ...p, budget: v }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                        <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                        <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                        <SelectItem value="5000+">$5,000+</SelectItem>
                        <SelectItem value="need-quote">Need a custom quote</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" size="lg" disabled={loading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    {loading ? "Sending..." : "Start the Conversation"} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
              </FadeInSection>
            </div>

            {/* Alternative Contact */}
            <div>
              <FadeInSection delay={200}>
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground">Prefer another method?</h3>

                  <div className="space-y-4">
                    <a href="mailto:theluminaragroup@gmail.com" className="flex items-start gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-muted">
                      <Mail className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Direct Email</p>
                        <p className="text-sm text-muted-foreground">theluminaragroup@gmail.com</p>
                        <p className="text-xs text-muted-foreground">Response within 24 hours</p>
                      </div>
                    </a>

                    <a href="tel:+254710852527" className="flex items-start gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-muted">
                      <Phone className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Book a Call</p>
                        <p className="text-sm text-muted-foreground">+254 710 852 527</p>
                        <p className="text-xs text-muted-foreground">Schedule a 30-minute discovery call</p>
                      </div>
                    </a>

                    <a
                      href="https://wa.me/254710852527"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-muted"
                    >
                      <MessageSquare className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Quick Question?</p>
                        <p className="text-sm text-muted-foreground">Message us on WhatsApp</p>
                        <p className="text-xs text-muted-foreground">Typically respond within 2 hours</p>
                      </div>
                    </a>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
