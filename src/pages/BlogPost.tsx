import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import gta5Image from "@/assets/gta5-card.jpg";

const BlogPost = () => {
  const { id } = useParams();

  // In a real app, this would fetch the post based on the ID
  const post = {
    title: "GTA 5 Money Making Guide 2024: Top 10 Methods",
    category: "GTA V",
    date: "Jan 15, 2024",
    readTime: "8 min read",
    image: gta5Image,
    content: `
      <h2>Introduction</h2>
      <p>Looking to make serious money in GTA Online? You've come to the right place. In this comprehensive guide, we'll cover the top 10 money-making methods that actually work in 2024.</p>

      <h2>1. The Cayo Perico Heist</h2>
      <p>The Cayo Perico Heist remains the most profitable solo money-making method in GTA Online. With the right approach, you can earn between $1-1.5 million per hour.</p>
      
      <h3>Tips for Success:</h3>
      <ul>
        <li>Focus on the primary target and skip secondary loot if going solo</li>
        <li>Use the drainage tunnel approach for fastest entry</li>
        <li>Learn the guard patterns to avoid detection</li>
      </ul>

      <h2>2. Agency Contracts</h2>
      <p>Agency contracts offer a great balance of fun gameplay and solid income. You can earn around $800k-1 million per hour with these missions.</p>

      <h2>3. Bunker Sales</h2>
      <p>While not as fast as heists, bunker sales provide consistent passive income. Let your bunker produce stock while you do other activities.</p>

      <h2>Conclusion</h2>
      <p>These methods will help you build your GTA Online fortune efficiently. Remember to mix and match these strategies to keep the gameplay fresh and maximize your earnings.</p>
    `,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <article className="pt-24 pb-16">
        {/* Header */}
        <div className="container mx-auto px-4 max-w-4xl mb-8">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <Badge className="mb-4 bg-primary/90">{post.category}</Badge>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-border">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="container mx-auto px-4 max-w-5xl mb-12">
          <div className="aspect-video rounded-2xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 max-w-3xl">
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-foreground
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-muted-foreground prose-ul:my-6
              prose-li:mb-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-card border border-border text-center space-y-4">
            <h3 className="text-2xl font-bold">Enjoyed this guide?</h3>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for more gaming tips and tricks
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Subscribe Now
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
