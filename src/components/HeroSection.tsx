import type React from "react";
import Button from "./common/Button";

const Hero: React.FC = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Slack is where the future works
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Transform the way you work with one place for everyone and
              everything you need to get stuff done.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="primary" href="#">
                TRY FOR FREE
              </Button>
              <Button
                variant="outline"
                href="#"
                className="flex items-center justify-center"
              >
                <img
                  src="https://ik.imagekit.io/q4rna6net/logos/search_lOIL-NHYG.png?updatedAt=1742710643269"
                  alt="Google Logo"
                  className="w-5 h-5 mr-2"
                />
                SIGN UP WITH GOOGLE
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src="https://ik.imagekit.io/q4rna6net/cactro/Slack_4HcpIghIb.jpg?updatedAt=1742710920786"
                alt="Slack interface"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
