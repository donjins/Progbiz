import Header from "../components/Header";
// import About from "../components/About";
import ProjectShowcase from "../components/About"
import Testimonial from "../components/Testimonials";
import TeamSection from "../components/TeamSection";
import Brand from "@/components/Brand";
import Pay from "../components/Pay";
import Portfolio from "../components/portfolio";
import Benifit from "../components/Benifit";
import Service from "../components/Service";
import Price from "../components/Price";
import Faq from "../components/Faq";
import Review from "../components/Review";
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      {/* <About /> */}

        <main className="min-h-screen bg-neutral text-white px-20 py-7 mt-24 space-y-12">
  {/* Projects + Testimonial */}
          <div className="flex justify-center">
            <div className="w-full max-w-[1200px] flex flex-col md:flex-row gap-6">
              <ProjectShowcase />
              <Testimonial />
            </div>
          </div>

          {/* Team Section */}
          <div className="flex justify-center">
            <div className="w-full max-w-[1225px]">
              <TeamSection />
            </div>
          </div>
        </main>
        <Brand />
        <Pay/>
        <Portfolio/>
        <Benifit/>
        <Service />
        <Price />
        <Faq/>
        <Review/>
        <Footer/>

    </>
  );
}
