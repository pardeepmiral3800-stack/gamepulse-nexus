import { Play } from "lucide-react";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  videoId: string;
}

const VideoCard = ({ title, thumbnail, videoId }: VideoCardProps) => {
  return (
    <a
      href={`https://youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <article className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center animate-glow-pulse">
              <Play className="w-8 h-8 text-accent-foreground ml-1" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        </div>
      </article>
    </a>
  );
};

export default VideoCard;
