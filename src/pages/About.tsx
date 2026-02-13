import { Link } from "react-router-dom";
import { Target, Eye, Lightbulb, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInSection from "@/components/FadeInSection";

const values = [
  { icon: Target, title: "Results-Driven", desc: "Every action is tied to measurable outcomes. No vanity metrics—only real growth." },
  { icon: Eye, title: "Transparency", desc: "Clear reporting, honest communication, and no surprises. You always know where you stand." },
  { icon: Lightbulb, title: "Innovation", desc: "We stay ahead of digital trends so your brand is always one step forward." },
  { icon: Heart, title: "Partnership", desc: "Your success is our success. We invest in understanding your business deeply." },
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection>
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-secondary">About Us</p>
            </FadeInSection>
            <FadeInSection delay={100}>
              <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
                Growing Businesses Through{" "}
                <span className="text-primary">Digital Harmony</span>
              </h1>
            </FadeInSection>
            <FadeInSection delay={200}>
              <p className="text-lg text-muted-foreground">
                Luminara Reach was founded on a simple belief: digital marketing works best when every channel
                works together. We're not just a service provider—we're your strategic growth partner.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-6">
            <FadeInSection>
              <h2 className="text-2xl font-bold text-foreground">Our Story</h2>
            </FadeInSection>
            <FadeInSection delay={100}>
              <p className="text-muted-foreground">
                In a world saturated with disconnected marketing tactics, we saw an opportunity.
                Businesses were investing in SEO, social media, customer care, and outreach—but
                each in isolation. The result? Fragmented efforts, wasted budgets, and missed connections.
              </p>
            </FadeInSection>
            <FadeInSection delay={200}>
              <p className="text-muted-foreground">
                Luminara Reach was born to change that. We bring all digital touchpoints under one
                roof, creating unified strategies that amplify each other. When your SEO drives
                traffic, your social media nurtures it, your customer care retains it, and your
                outreach expands it—that's when real growth happens.
              </p>
            </FadeInSection>
            <FadeInSection delay={300}>
              <p className="font-medium text-foreground">
                "Turning visibility into meaningful connections and measurable growth."
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <FadeInSection>
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-3xl font-bold text-foreground">What We Stand For</h2>
              <p className="text-muted-foreground">The principles that guide every strategy we build</p>
            </div>
          </FadeInSection>
          <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
            {values.map((v, i) => (
              <FadeInSection key={v.title} delay={i * 100}>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">{v.title}</h3>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center">
          <FadeInSection>
            <h2 className="mb-4 text-3xl font-bold text-foreground">Ready to grow together?</h2>
            <p className="mb-8 text-muted-foreground">Let's discuss how we can amplify your digital presence.</p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeInSection>
        </div>
      </section>
    </>
  );
};

export default About;
