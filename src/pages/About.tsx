import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Gamepad2, Target, Users, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Gamepad2,
      title: "Passion for Gaming",
      description: "We're gamers first, content creators second. Every guide comes from real gameplay experience.",
    },
    {
      icon: Target,
      title: "Quality Content",
      description: "Thoroughly researched, tested, and verified information you can trust and rely on.",
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Built by gamers, for gamers. We listen to feedback and create content you actually want.",
    },
    {
      icon: Zap,
      title: "Always Current",
      description: "Regular updates to keep our guides relevant with the latest game patches and meta changes.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-['Orbitron']">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">GamePulse Hub</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted source for gaming guides, news, and community-driven content
            </p>
          </div>

          {/* Story Section */}
          <div className="mb-20">
            <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  GamePulse Hub was born from a simple idea: create a gaming resource that we ourselves would want to use. 
                  Too often, gaming guides are outdated, incomplete, or written by people who haven't actually played the games.
                </p>
                <p>
                  We're a team of passionate gamers who have spent thousands of hours in titles like GTA V, GTA VI, and other 
                  major releases. Every guide, tip, and trick you find here has been personally tested and verified by our team.
                </p>
                <p>
                  Our mission is to help gamers of all skill levels master their favorite games, discover hidden content, 
                  and stay updated with the latest news and updates. We believe gaming should be fun, accessible, and 
                  rewarding for everyone.
                </p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">What We Stand For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <value.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <div className="text-center p-8 bg-gradient-card rounded-xl border border-border">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Guides Published</div>
            </div>
            <div className="text-center p-8 bg-gradient-card rounded-xl border border-border">
              <div className="text-4xl font-bold text-secondary mb-2">50K+</div>
              <div className="text-muted-foreground">Community Members</div>
            </div>
            <div className="text-center p-8 bg-gradient-card rounded-xl border border-border">
              <div className="text-4xl font-bold text-accent mb-2">1M+</div>
              <div className="text-muted-foreground">Monthly Readers</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-card rounded-2xl p-12 border border-border">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with fellow gamers, share your experiences, and stay updated with the latest content
            </p>
            <button className="bg-gradient-primary hover:opacity-90 transition-opacity px-8 py-4 rounded-lg font-semibold text-lg">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
