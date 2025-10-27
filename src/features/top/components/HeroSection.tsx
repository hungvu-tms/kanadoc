import ImageFallback from "@/components/common/ImageFallback";

const HeroSection = () => {
  return (
    <section className="w-screen h-[60vh] sm:h-screen px-[40px] sm:px-0  bg-[url('/images/top/newmainTop1.jpg')] bg-cover bg-center flex items-center justify-center">
      <ImageFallback
        showSkeleton={false}
        src="/logoMain.svg"
        alt="hero-bg"
        width={500}
        height={500}
        className="filter drop-shadow-[0_3px_10px_rgb(40,92,162)] w-[80%] sm:w-auto"
      />
    </section>
  );
};

export default HeroSection;
