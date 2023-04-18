import Image from 'next/image';
import qrCode from '../public/portfolio_qr_code.png';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-3 bg-black py-8 text-center text-lg text-white lg:flex-row">
      <small>
        Designed and developed by{' '}
        <a href="https://masondubelbeis.com">
          <span className="text-blue-300">Mason J. Dubelbeis</span>, 2023
        </a>
      </small>
      <Image src={qrCode} alt="QR code to portfolio" className="w-8" />
    </footer>
  );
};

export default Footer;
