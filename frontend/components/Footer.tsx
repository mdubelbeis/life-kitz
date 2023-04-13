import Image from "next/image";
import qrCode from "../public/portfolio_qr_code.png";

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-center gap-10 bg-black py-8 text-xl text-white">
      <small>
        Designed and developed by{" "}
        <a href="https://masondubelbeis.com">
          <span className="text-blue-300">Mason J. Dubelbeis</span>, 2023
        </a>
      </small>
      <Image src={qrCode} alt="QR code to portfolio" className="w-14" />
    </footer>
  );
};

export default Footer;
