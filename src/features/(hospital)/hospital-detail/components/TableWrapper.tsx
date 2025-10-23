interface TableWrapperProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}
const TableWrapper = ({ title, icon, children }: TableWrapperProps) => {
  return (
    <div className="flex flex-col w-full bg-[#efefef] border border-[#33447D]">
      <div className="py-[8px] px-[16px] flex gap-2 justify-center items-center bg-[#33447D]">
        {icon}
        <p className="text-white text-[16px] font-bold">{title}</p>
      </div>
      <div className="p-[32px] w-full">{children}</div>
    </div>
  );
};

export default TableWrapper;
