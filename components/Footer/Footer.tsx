import github from 'public/GitHub-Mark-Light-120px-plus.png';
import instagram from 'public/instagram-logo.png';
import tiktok from 'public/tiktok-logo.svg';
import twitch from 'public/twitch-logo.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white">
      <div className="p-4 sm:p-6">
        <ul>
          <li className="my-3">
            <a
              href="https://github.com/eduardoyutaka"
              className="flex flex-row items-center gap-2"
            >
              <Image src={github} alt="Github logo" height={32} width={32} />
              <span>Github</span>
            </a>
          </li>
          <li className="my-3">
            <a
              href="https://instagram.com/edu.nakanishi"
              className="flex flex-row items-center gap-2"
            >
              <Image
                src={instagram}
                alt="Instagram logo"
                height={32}
                width={32}
              />
              Instagram
            </a>
          </li>
          <li className="my-3">
            <a
              href="https://vm.tiktok.com/ZMdUVNQkj/"
              className="flex flex-row items-center gap-2"
            >
              <Image src={tiktok} alt="Instagram logo" height={32} width={32} />
              TikTok
            </a>
          </li>
          <li className="my-3">
            <a
              href="https://twitch.tv/eduardo_nakanishi"
              className="flex flex-row items-center gap-2"
            >
              <Image src={twitch} alt="Instagram logo" height={32} width={32} />
              Twitch
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
