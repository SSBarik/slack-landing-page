import { partnerLogos } from "../configs/partners";

const PartnersMarquee: React.FC = () => {
  return (
    <section className="py-12 border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partnerLogos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              <img
                src={logo.src || "/placeholder.svg"}
                alt={logo.name}
                className="h-8 md:h-10 w-auto grayscale opacity-70"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
