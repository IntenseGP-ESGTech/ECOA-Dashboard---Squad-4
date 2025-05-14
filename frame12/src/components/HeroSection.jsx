import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6">
      <img
        src="/equipe.jpeg"
        alt="Equipe Sustentável"
        className="w-full md:w-1/2 rounded-xl"
      />
      <div>
        <h2 className="text-3xl font-bold text-green-800 mb-4">Construindo um Futuro Sustentável</h2>
        <p className="text-gray-700">
          Nossa equipe está comprometida com a inovação em energia renovável, desenvolvendo soluções sustentáveis para o planeta.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
