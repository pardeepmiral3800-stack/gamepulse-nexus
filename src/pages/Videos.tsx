import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";
import gta5Image from "@/assets/gta5-card.jpg";
import gta6Image from "@/assets/gta6-card.jpg";

const Videos = () => {
  const videos = [
    {
      title: "GTA 5 Money Guide - Make $1 Million Per Hour!",
      thumbnail: gta5Image,
      videoId: "dQw4w9WgXcQ",
    },
    {
      title: "GTA 6 Trailer Breakdown - Everything You Missed",
      thumbnail: gta6Image,
      videoId: "dQw4w9WgXcQ",
    },
    {
      title: "Top 10 Hidden Secrets in GTA 5",
      thumbnail: gta5Image,
      videoId: "dQw4w9WgXcQ",
    },
    {
      title: "GTA 6 Map Size Comparison - Bigger Than We Thought?",
      thumbnail: gta6Image,
      videoId: "dQw4w9WgXcQ",
    },
    {
      title: "Best GTA 5 Mods of 2024",
      thumbnail: gta5Image,
      videoId: "dQw4w9WgXcQ",
    },
    {
      title: "GTA 6 Release Date - Official Confirmation",
      thumbnail: gta6Image,
      videoId: "dQw4w9WgXcQ",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-['Orbitron']">
              Video <span className="bg-gradient-accent bg-clip-text text-transparent">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Watch our latest gameplay videos, guides, and walkthroughs
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <VideoCard key={index} {...video} />
            ))}
          </div>

          {/* YouTube Channel CTA */}
          <div className="mt-16 text-center p-12 rounded-2xl bg-gradient-card border border-border">
            <h2 className="text-3xl font-bold mb-4">Want More Content?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our YouTube channel for weekly gaming guides, news, and gameplay videos
            </p>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-glow">
                Subscribe on YouTube
              </button>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Videos;
