import Doctors from "./components/Doctors";
import Footer from "./components/Footer";
import Future from "./components/Future";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Slider from "./components/Slider";

export default function Page() {
  return (
    <main className="bg-white flex flex-col">
      <Header />
      <Hero />
      <Future />
      <Slider />
      <Doctors />
      <Footer />
    </main>
  );
}
