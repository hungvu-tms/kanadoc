const BaseContainer = ({
  children,
  className,
  component: Component = "section",
  classNameContent,
}: {
  children: React.ReactNode;
  className?: string;
  classNameContent?: string;
  component?: "section" | "div" | "footer" | "header";
}) => {
  // sm:bg-red-500 md:bg-green-500 lg:bg-blue-500 xl:bg-yellow-500  2xl:bg-pink-500
  return (
    <Component
      className={`w-full flex justify-center bg-[#F5F6FA] ${className ?? ""}`}
    >
      <div
        className={`xl:w-[1120px] 2xl:w-[1120px] w-full px-[20px] xl:px-0 ${
          classNameContent || ""
        }`}
      >
        {children}
      </div>
    </Component>
  );
};
export default BaseContainer;
