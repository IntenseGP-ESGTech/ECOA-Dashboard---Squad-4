import React from 'react';

const LoginPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/equipe.jpeg')" }}
    >
      <div className="bg-black bg-opacity-60 rounded-2xl p-8 w-full max-w-md text-white shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Eco Conectar</h2>
        <p className="mb-6 text-center text-sm text-gray-300">
          Preencha seus dados para iniciar sua jornada sustentável.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm">Nome</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-white text-black"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              className="w-full p-2 rounded bg-white text-black"
              placeholder="email@exemplo.com"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Telefone</label>
            <input
              type="tel"
              className="w-full p-2 rounded bg-white text-black"
              placeholder="(00) 00000-0000"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded mt-4"
          >
            Conectar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
