import { Link } from "react-router-dom";
import { Search, Users, HeartHandshake, Megaphone, ArrowRight, TrendingUp, BarChart3, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FadeInSection from "@/components/FadeInSection";

const services = [
  {
    icon: Search,
    title: "Search Amplification",
    description: "Technical & content SEO that drives qualified traffic to your digital doorstep.",
  },
  {
    icon: Users,
    title: "Social Connection",
    description: "Strategic management that builds communities, not just followers.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Harmony",
    description: "24/7 care that transforms satisfaction into lasting loyalty.",
  },
  {
    icon: Megaphone,
    title: "Strategic Outreach",
    description: "Email, partnerships, and PR that expand your influence.",
  },
];

const process = [
  { step: "01", title: "Discover", desc: "Deep-dive into your brand, audience, and goals." },
  { step: "02", title: "Strategize", desc: "Craft a tailored roadmap for growth." },
  { step: "03", title: "Implement", desc: "Execute with precision and creativity." },
  { step: "04", title: "Grow", desc: "Scale what works, refine what doesn't." },
  { step: "05", title: "Refine", desc: "Continuous optimization for peak performance." },
];

const stats = [
  { icon: TrendingUp, value: "2x", label: "Average client growth" },
  { icon: BarChart3, value: "150%", label: "Traffic increase" },
  { icon: Globe, value: "50+", label: "Brands amplified" },
  { icon: Award, value: "98%", label: "Client retention" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-24 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection>
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-secondary">
                Visibility with purpose
              </p>
            </FadeInSection>
            <FadeInSection delay={100}>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
                We Amplify Your{" "}
                <span className="text-primary">Digital Presence</span>
              </h1>
            </FadeInSection>
            <FadeInSection delay={200}>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                Comprehensive SEO, social media, customer care, and outreach—unified
                under one strategic partner.
              </p>
            </FadeInSection>
            <FadeInSection delay={300}>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contact">
                  Start Growing <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </FadeInSection>
          </div>
        </div>
        {/* Decorative dots */}
        <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute -left-20 bottom-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container">
          <FadeInSection>
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-3xl font-bold text-foreground">Our Services</h2>
              <p className="text-muted-foreground">An integrated approach that creates 2x the impact</p>
            </div>
          </FadeInSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <FadeInSection key={service.title} delay={i * 100}>
                <Card className="group h-full border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                  <CardContent className="flex flex-col items-start p-6">
                    <div className="mb-4 rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
          <FadeInSection delay={400}>
            <div className="mt-8 text-center">
              <Button asChild variant="outline">
                <Link to="/services">
                  Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Process */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <FadeInSection>
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-3xl font-bold text-foreground">Our Process</h2>
              <p className="text-muted-foreground">We don't just execute tasks—we architect growth systems.</p>
            </div>
          </FadeInSection>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-5">
            {process.map((p, i) => (
              <FadeInSection key={p.step} delay={i * 100}>
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {p.step}
                  </div>
                  <h3 className="mb-1 font-semibold text-foreground">{p.title}</h3>
                  <p className="text-xs text-muted-foreground">{p.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <FadeInSection key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <stat.icon className="mx-auto mb-3 h-8 w-8 text-secondary" />
                  <div className="mb-1 text-3xl font-bold text-foreground">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="container text-center">
          <FadeInSection>
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
              Ready to be found, loved, and chosen?
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Let's discuss your growth goals
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">
                Start the Conversation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeInSection>
        </div>
      </section>
    </>
  );
};

export default Index;
