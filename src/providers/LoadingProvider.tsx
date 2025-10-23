"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Toaster } from "@/components/ui/sonner";
import { Spinner } from "@/components/ui/spinner";
import {
  createContext,
  useCallback,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";
import { toast } from "sonner";

type ToastState = {
  messages: string;
  severity: "success" | "error" | "warning" | "info";
};

export interface LoadingContextType {
  isLoading: boolean;
  showLoading: () => void;
  hideLoading: () => void;
  showToast: (arg: ToastState) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoading = useCallback(() => setIsLoading(true), []);
  const hideLoading = useCallback(() => setIsLoading(false), []);
  const showToast = useCallback((arg: ToastState) => {
    toast[arg.severity](arg.messages);
  }, []);

  return (
    <LoadingContext.Provider
      value={{ isLoading, showLoading, hideLoading, showToast }}
    >
      <Toaster position="top-right" expand={true} richColors closeButton />
      <Dialog open={isLoading}>
        <DialogContent className="[&>button.absolute.right-4.top-4]:hidden flex items-center justify-center bg-transparent shadow-none border-none focus:outline-none">
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          <Spinner className="text-[#112B72] w-15 h-15" />
        </DialogContent>
      </Dialog>

      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
