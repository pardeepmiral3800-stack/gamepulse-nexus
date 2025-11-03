import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import BlogCard from "@/components/BlogCard";
import heroImage from "@/assets/hero-gaming.jpg";
import gta5Image from "@/assets/gta5-card.jpg";
import gta6Image from "@/assets/gta6-card.jpg";

const Index = () => {
  const featuredPosts = [
    {
      id: "gta5-money-guide",
      title: "GTA 5 Money Making Guide 2024: Top 10 Methods",
      excerpt: "Master the art of making millions in GTA Online with these proven strategies and tips.",
      category: "GTA V",
      date: "Jan 15, 2024",
      readTime: "8 min read",
      image: gta5Image,
    },
    {
      id: "gta6-news",
      title: "GTA 6: Everything We Know About Vice City",
      excerpt: "All confirmed information, leaks, and speculation about the upcoming Grand Theft Auto VI.",
      category: "GTA VI",
      date: "Jan 12, 2024",
      readTime: "12 min read",
      image: gta6Image,
    },
    {
      id: "gta5-secrets",
      title: "10 Hidden Secrets in GTA 5 You Never Knew",
      excerpt: "Discover easter eggs and hidden details that even veteran players might have missed.",
      category: "GTA V",
      date: "Jan 10, 2024",
      readTime: "6 min read",
      image: gta5Image,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Gaming hero" 
            className="w-full h-full object-cover opacity-40"
            fetchPriority="high"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Latest Gaming Content</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight font-['Orbitron']">
              Level Up Your{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Gaming
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl">
              Your ultimate source for GTA guides, gaming news, tips, and tricks. 
              Join thousands of gamers mastering their favorite titles.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity font-semibold text-lg h-14 px-8"
              >
                <Link to="/blog">
                  Explore Guides <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-primary/50 hover:bg-primary/10 text-lg h-14 px-8"
              >
                <Link to="/videos">
                  Watch Videos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-wider">Featured</span>
              </div>
              <h2 className="text-4xl font-bold">Latest Guides</h2>
            </div>
            <Button asChild variant="ghost" className="hidden md:flex">
              <Link to="/blog">
                View All <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Button asChild variant="outline">
              <Link to="/blog">
                View All Guides <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      <Footer />
    </div>
  );
};

export default Index;
