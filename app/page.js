import Image from "next/image";
import Hero from "./-commerce/Hero";
import Product from "./-commerce/Product";

export default function Home() {
  return (
    <div style={{ background: "#111827" }}>
      <Hero />
      <Product />
    </div>
  );
}
