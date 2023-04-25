const Footer: React.FC = () => {
  return (
    <footer className=" bottom-0 left-0 z-40 flex w-full flex-col items-center justify-center gap-3 bg-primary py-8 text-center text-lg text-white lg:flex-row">
      <small>
        Designed and developed by{' '}
        <a href="https://github.com/mdubelbeis/life-kitz">
          <span className="text-blue-300">Mason J. Dubelbeis</span>, 2023
        </a>
      </small>
    </footer>
  );
};

export default Footer;
