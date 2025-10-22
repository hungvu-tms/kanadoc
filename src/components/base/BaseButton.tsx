import { Button } from "@/components/ui/button";

const BaseButton = ({
  children,
  className,
  ...props
}: React.ComponentProps<"button">) => {
  return (
    <Button
      className={`bg-[#3F96F5] rounded-[8px] hover:bg-[#112B72] text-[16px] cursor-pointer py-[16px] h-auto min-w-[100px] ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </Button>
  );
};
export default BaseButton;
