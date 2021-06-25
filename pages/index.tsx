import Image from 'next/image';
import photo from 'public/programador-de-cafe.jpeg';

const Home = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row">
        <div className="prose flex flex-col justify-center sm:h-auto h-screen p-4 sm:p-6 bg-pink-50">
          <div className="flex flex-col">
            <h1 className="font-mono">
              Sou um programador independente de cafés!
            </h1>
            <p className="font-mono text-lg">
              Faço sites e aplicativos de graça buscando causar impacto social
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
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
