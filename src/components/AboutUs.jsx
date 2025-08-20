import React from "react"
import { Button } from "./ui/button"

const AboutUs = () => {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="w-80 h-80 mx-auto">
            <img
              src="/images/about1.png"
              alt="Abstract swirl"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6">
            ABOUT <span className="text-orange-500">US</span>
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            The rain began without warning, each drop landing like a small secret whispered against the pavement. Streetlights blinked uncertainly, as if deciding whether to stay awake, and a stray newspaper skittered past like it had somewhere urgent to be. A man in a green coat stood at the corner, staring at the sky as though expecting an answer..................
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
            Explore More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
