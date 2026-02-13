import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import FadeInSection from "@/components/FadeInSection";

const posts = [
  {
    slug: "seo-trends-2025",
    title: "Top SEO Trends to Watch in 2025",
    excerpt: "Stay ahead of the curve with these emerging search engine optimization strategies that will define the next year.",
    date: "2025-01-15",
    category: "SEO",
  },
  {
    slug: "social-media-engagement",
    title: "Building Authentic Social Media Engagement",
    excerpt: "Why genuine community building outperforms vanity metrics every time—and how to make the shift.",
    date: "2025-01-08",
    category: "Social Media",
  },
  {
    slug: "customer-retention-strategies",
    title: "5 Customer Retention Strategies That Actually Work",
    excerpt: "Retaining customers is 5x cheaper than acquiring new ones. Here's how to keep them coming back.",
    date: "2024-12-20",
    category: "Customer Care",
  },
  {
    slug: "email-marketing-personalization",
    title: "The Power of Personalization in Email Marketing",
    excerpt: "How data-driven personalization can boost your email open rates by 40% and drive meaningful conversions.",
    date: "2024-12-10",
    category: "Outreach",
  },
  {
    slug: "digital-marketing-integration",
    title: "Why Integrated Digital Marketing Wins",
    excerpt: "Discover how unifying your SEO, social, and outreach strategies creates exponential growth.",
    date: "2024-11-28",
    category: "Strategy",
  },
  {
    slug: "content-strategy-guide",
    title: "The Ultimate Content Strategy Guide for Small Businesses",
    excerpt: "A step-by-step framework for creating content that drives traffic, engagement, and conversions.",
    date: "2024-11-15",
    category: "Content",
  },
];

const Blog = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection>
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-secondary">Our Blog</p>
            </FadeInSection>
            <FadeInSection delay={100}>
              <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
                Insights for{" "}
                <span className="text-primary">Digital Growth</span>
              </h1>
            </FadeInSection>
            <FadeInSection delay={200}>
              <p className="text-lg text-muted-foreground">
                Expert perspectives on SEO, social media, customer care, and digital strategy.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <FadeInSection key={post.slug} delay={i * 100}>
                <Card className="group h-full border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read More <ArrowRight className="h-3 w-3" />
                    </span>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
