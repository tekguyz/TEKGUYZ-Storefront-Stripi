import Header from "@/components/header";
import Hero from "@/components/hero";
import TrustBar from "@/components/trust-bar";
import BundleSection from "@/components/bundle-section";
import PurchaseBlock from "@/components/purchase-block";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-[var(--color-base)]">
        <Hero />
        <TrustBar />
        <BundleSection />
        <PurchaseBlock />
      </main>
      <Footer />
    </>
  );
}
