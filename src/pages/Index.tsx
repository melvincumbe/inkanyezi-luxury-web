
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/home/HeroBanner";
import BrandsSection from "@/components/home/BrandsSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ShippingHighlight from "@/components/home/ShippingHighlight";

const Index = () => {
  return (
    <Layout>
      <HeroBanner />
      <BrandsSection />
      <FeaturedProducts />
      <ShippingHighlight />
    </Layout>
  );
};

export default Index;
