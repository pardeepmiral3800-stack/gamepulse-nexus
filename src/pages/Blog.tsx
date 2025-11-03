import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import gta5Image from "@/assets/gta5-card.jpg";
import gta6Image from "@/assets/gta6-card.jpg";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "GTA V", "GTA VI", "Guides", "News", "Reviews"];

  const blogPosts = [
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
    {
      id: "gta5-mods",
      title: "Best GTA 5 Mods of the Week",
      excerpt: "Check out the most exciting and creative mods released this week for GTA V.",
      category: "GTA V",
      date: "Jan 8, 2024",
      readTime: "5 min read",
      image: gta5Image,
    },
    {
      id: "gta6-trailer",
      title: "GTA 6 Trailer Breakdown & Analysis",
      excerpt: "Frame-by-frame analysis of the official GTA VI trailer with hidden details revealed.",
      category: "GTA VI",
      date: "Jan 5, 2024",
      readTime: "10 min read",
      image: gta6Image,
    },
    {
      id: "gta6-map",
      title: "What to Expect from the GTA 6 Map",
      excerpt: "Predictions and analysis of the Vice City map size, locations, and features.",
      category: "GTA VI",
      date: "Jan 3, 2024",
      readTime: "7 min read",
      image: gta6Image,
    },
  ];

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-['Orbitron']">
              Gaming <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              In-depth guides, latest news, and expert tips for your favorite games
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-gradient-primary hover:opacity-90"
                    : "hover:border-primary/50"
                }
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>

          {/* Load More */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="hover:border-primary/50">
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
