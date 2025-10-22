interface HeroSectionProps {
  title: string;
  image: string;
}
const HeroSection = ({ title, image }: HeroSectionProps) => {
  return (
    <section
      style={{ backgroundImage: `url("${image}")` }}
      className={`w-screen h-[60vh]  px-[40px] sm:px-0  bg-cover bg-center flex items-center justify-center`}
    >
      <h1 className="text-white text-[48px] font-bold text-center [text-shadow:1px_2px_3px_#123272]">
        {title}
      </h1>
    </section>
  );
};

export default HeroSection;
