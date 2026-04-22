import Image from "next/image";
import Link from "next/link";

interface DestinationCardProps {
  slug: string;
  name: string;
  image: string;
  /** First screenful of cards: eager-load to improve LCP. */
  priority?: boolean;
}

export default function DestinationCard({ slug, name, image, priority }: DestinationCardProps) {
  return (
    <Link 
      href={`/destinations/${slug}`}
      className="relative h-[450px] w-full group block overflow-hidden rounded-[2rem] cursor-pointer transition-all duration-700 hover:shadow-[0_20px_50px_rgba(46,121,199,0.4)]"
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 30vw"
        priority={priority}
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center">
        {/* Name with Glassmorphism */}
        <div className="mb-6 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transform transition-all duration-500 group-hover:-translate-y-2">
          <h3 className="text-2xl font-bold text-white tracking-wide font-[var(--font-playfair)]">
            {name}
          </h3>
        </div>

        {/* Explore Button — always visible on mobile, hover on desktop */}
        <div className="transition-all duration-500 transform opacity-100 md:translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="px-8 py-3 bg-[#2E79C7] text-white rounded-full font-bold text-sm tracking-widest uppercase shadow-lg shadow-[#2E79C7]/20 inline-block">
            Explore
          </span>
        </div>
      </div>
    </Link>
  );
}
