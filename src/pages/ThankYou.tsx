import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInSection from "@/components/FadeInSection";

const ThankYou = () => {
  return (
    <section className="flex min-h-[70vh] items-center py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <FadeInSection>
            <CheckCircle2 className="mx-auto mb-6 h-16 w-16 text-secondary" />
          </FadeInSection>
          <FadeInSection delay={100}>
            <h1 className="mb-4 text-4xl font-bold text-foreground">Thank You!</h1>
          </FadeInSection>
          <FadeInSection delay={200}>
            <p className="mb-2 text-lg text-muted-foreground">
              Your message has been received. We're excited to learn about your business
              and will get back to you within 24 hours.
            </p>
          </FadeInSection>
          <FadeInSection delay={300}>
            <div className="my-8 rounded-lg bg-muted p-6 text-left">
              <h3 className="mb-3 font-semibold text-foreground">What happens next?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="font-medium text-primary">1.</span> Our team reviews your inquiry
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium text-primary">2.</span> We research your industry and competitors
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium text-primary">3.</span> We reach out with initial insights and next steps
                </li>
              </ul>
            </div>
          </FadeInSection>
          <FadeInSection delay={400}>
            <Button asChild variant="outline">
              <Link to="/">
                Back to Home <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
