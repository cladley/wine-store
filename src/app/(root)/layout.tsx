import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import Container from "@/components/ui/container";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="mb-auto pt-6">
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
