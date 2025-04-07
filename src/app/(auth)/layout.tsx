import Header from "@/components/shared/header";
import Container from "@/components/ui/container";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="mb-auto pt-6">
        <Container>{children}</Container>
      </main>
    </>
  );
};

export default RootLayout;
