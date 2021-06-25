import Image from 'next/image';
import photo from 'public/programador-de-cafe.jpeg';

const Home = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-col justify-center lg:gap-16 md:gap-8 sm:gap-6 p-6 bg-pink-50">
          <h1 className="lg:text-5xl md:text-3xl font-mono">
            Sou um programador independente de cafés!
          </h1>
          <h2 className="lg:text-3xl md:text-xl font-mono">
            Faço sites e aplicativos de graça buscando causar impacto social
          </h2>
          <div className="flex sm:flex-col md:flex-row justify-center gap-4">
            <button
              onClick={() => window.alert('Em Breve')}
              className="w-full p-4 bg-black text-white rounded-lg font-mono"
            >
              Preciso de um site!
            </button>
            <button
              onClick={() => window.alert('Em breve também xD')}
              className="w-full p-4 bg-white border border-black rounded-lg font-mono"
            >
              Ver outros projetos
            </button>
          </div>
        </div>
        <Image src={photo} alt="Man drinking coffee" />
      </div>
    </div>
  );
};

export default Home;
