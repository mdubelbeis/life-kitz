const Footer: React.FC = () => {
  return (
    <footer className=" w-full bottom-0 left-0 flex flex-col items-center justify-center gap-3 bg-primary py-8 text-center text-lg text-white lg:flex-row z-40">
      <small>
        Designed and developed by{' '}
        <a href="https://masondubelbeis.com">
          <span className="text-blue-300">Mason J. Dubelbeis</span>, 2023
        </a>
      </small>
    </footer>
  );
};

export default Footer;
