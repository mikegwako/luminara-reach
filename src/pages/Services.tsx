import { Link } from "react-router-dom";
import { Search, Users, HeartHandshake, Megaphone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FadeInSection from "@/components/FadeInSection";

const serviceDetails = [
  {
    icon: Search,
    title: "Search Amplification",
    tagline: "Be found by the people who matter most",
    description:
      "Our comprehensive SEO strategies combine technical excellence with compelling content to drive qualified organic traffic.",
    features: [
      "Technical SEO audits & optimization",
      "Keyword research & content strategy",
      "On-page & off-page optimization",
      "Local SEO for regional visibility",
      "Performance tracking & reporting",
    ],
  },
  {
    icon: Users,
    title: "Social Connection",
    tagline: "Build communities, not just followers",
    description:
      "Strategic social media management that creates genuine engagement and turns audiences into brand advocates.",
    features: [
      "Platform strategy & content calendars",
      "Community management & engagement",
      "Paid social advertising",
      "Influencer partnerships",
      "Analytics & performance insights",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Customer Harmony",
    tagline: "Transform satisfaction into loyalty",
    description:
      "Responsive, empathetic customer care that builds trust and turns one-time buyers into lifelong advocates.",
    features: [
      "Multi-channel support management",
      "Response time optimization",
      "Customer feedback systems",
      "Reputation management",
      "Satisfaction tracking & reporting",
    ],
  },
  {
    icon: Megaphone,
    title: "Strategic Outreach",
    tagline: "Expand your influence authentically",
    description:
      "Targeted email campaigns, partnership development, and PR strategies that open doors to new audiences.",
    features: [
      "Email marketing automation",
      "Partnership & collaboration strategy",
      "Digital PR & media outreach",
      "Lead nurturing campaigns",
      "ROI tracking & optimization",
    ],
  },
];

const Services = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection>
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-secondary">Our Services</p>
            </FadeInSection>
            <FadeInSection delay={100}>
              <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
                Your Digital Presence,{" "}
                <span className="text-primary">Perfected</span>
              </h1>
            </FadeInSection>
            <FadeInSection delay={200}>
              <p className="text-lg text-muted-foreground">
                Four interconnected services, one unified strategy. When everything works
                together, you don't just grow—you thrive.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container space-y-16">
          {serviceDetails.map((service, i) => (
            <FadeInSection key={service.title}>
              <Card className="overflow-hidden border-border/50">
                <CardContent className="grid gap-8 p-8 md:grid-cols-2">
                  <div>
                    <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h2 className="mb-2 text-2xl font-bold text-foreground">{service.title}</h2>
                    <p className="mb-4 text-sm font-medium text-secondary">{service.tagline}</p>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                  <div>
                    <h4 className="mb-4 font-semibold text-foreground">What's included:</h4>
                    <ul className="space-y-3">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Complete Package */}
      <section className="bg-primary py-20">
        <div className="container text-center">
          <FadeInSection>
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
              The Complete Growth Package
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
              Why choose one when all four work better together? Our integrated approach
              creates 2x the impact of isolated services.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">
                Get Your Custom Strategy <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeInSection>
        </div>
      </section>
    </>
  );
};

export default Services;
