import Image from "next/image";
import { Car } from "lucide-react";
import { FLEET_PHOTOS, type FleetPhoto } from "@/data/fleet";

/**
 * Fleet gallery — real Quick Car Lift Service UAE vehicles.
 * Server component; all images lazy-loaded below the fold with
 * explicit dimensions (CLS-safe).
 */
export default function FleetGallery({
  photos = FLEET_PHOTOS,
  heading = "Our Fleet – Real Cars, Real Drivers",
  subheading = "Meet the actual vehicles that serve our daily car lift routes across the UAE.",
  id = "fleet-gallery",
}: {
  photos?: FleetPhoto[];
  heading?: string;
  subheading?: string;
  id?: string;
}) {
  return (
    <section aria-labelledby={`${id}-heading`} className="py-14 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Our Fleet
          </p>
          <h2
            id={`${id}-heading`}
            className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
          >
            {heading}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            {subheading}
          </p>
        </div>
        <ul
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 list-none"
          role="list"
        >
          {photos.map((photo) => (
            <li
              key={photo.src}
              className="group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div
                className="relative w-full overflow-hidden bg-slate-100"
                style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  title={photo.title}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-300"
                />
              </div>
              <p className="px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-700 flex items-center gap-1.5">
                <Car className="h-3.5 w-3.5 text-blue-500 shrink-0" aria-hidden="true" />
                {photo.caption}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
