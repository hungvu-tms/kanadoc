interface ZoneChipProps {
  zone: string;
  type: number;
}
const ZoneChip = ({ zone, type }: ZoneChipProps) => {
  const returnColorAndIcon = (type: number) => {
    switch (type) {
      case 1:
        return { color: "#B9CC72", icon: "①" };
      case 2:
        return { color: "#EBE88E", icon: "②" };
      case 3:
        return { color: "#E4B778", icon: "③" };
      case 4:
        return { color: "#7FB473", icon: "④" };
      case 5:
        return { color: "#4D9B5D", icon: "⑤" };
      case 6:
        return { color: "#00A5D3", icon: "⑥" };
      case 7:
        return { color: "#E09C9E", icon: "⑦" };
      case 8:
        return { color: "#DAE68D", icon: "⑧" };
      case 9:
        return { color: "#8CBEDF", icon: "⑨" };
      case 10:
        return { color: "#99CDBD", icon: "⑩" };
      case 11:
        return { color: "#4589C4", icon: "⑪" };
      default:
        return { color: "#B9CC72", icon: "①" };
    }
  };
  return (
    <div
      style={{ backgroundColor: returnColorAndIcon(type).color }}
      className="px-[10px] py-[5px] flex items-center gap-2 w-fit text-white text-[14px] font-bold"
    >
      {returnColorAndIcon(type).icon} {zone}
    </div>
  );
};

export default ZoneChip;
