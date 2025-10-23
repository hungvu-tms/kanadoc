import LoadingProvider from "@/providers/LoadingProvider";
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LoadingProvider>{children}</LoadingProvider>
    </>
  );
};

export default AppProvider;
