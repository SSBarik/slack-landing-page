import type React from "react";
import Button from "./common/Button";

const FeatureSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Video Embed */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <iframe
                src="https://www.youtube.com/embed/NKmubjUgX08"
                title="Pegboard Video"
                allowFullScreen
                className="w-full h-64 md:h-96 rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Now is your moment to build a better tomorrow
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We've seen what the future can be. Now it's time to decide what it
              will be.
            </p>
            <div className="mt-6">
              <Button
                variant="bordered"
                href="https://www.youtube.com/embed/NKmubjUgX08"
              >
                WATCH VIDEO
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
