import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
const BaseModal = ({
  children,
  open,
  onClose,
  header,
}: {
  header?: React.ReactNode;
  children: React.ReactNode;
  open: boolean;
  onClose: (open: boolean) => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="[&>button.absolute.right-4.top-4]:hidden rounded-[4px] w-auto min-w-[80%] sm:min-w-[500px] focus:!outline-0 min-h-[500px]">
        <div className="flex justify-end items-center w-full absolute top-0 right-0 p-[7px]">
          <X
            className="w-6 h-6 cursor-pointer"
            onClick={() => onClose(false)}
          />
        </div>
        <div className="overflow-y-auto max-h-[90vh] w-full no-scrollbar">
          {header ? (
            header
          ) : (
            <DialogHeader>
              <DialogTitle></DialogTitle>
            </DialogHeader>
          )}
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default BaseModal;
