import { partnerLogos } from "../configs/partners";

const PartnersMarquee: React.FC = () => {
  return (
    <section className="py-12 overflow-hidden">
      <div className="relative flex w-full">
        {/* Marquee Container */}
        <div className="flex items-center gap-8 md:gap-12 animate-marquee">
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[120px] md:min-w-[160px]"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 md:h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
