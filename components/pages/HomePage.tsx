/* =========================
   Home Page
   Driveway-inspired redesign:
   Header → Hero → Shop With Confidence → Sell → Drivers Seat → Reviews → FAQ → Footer
========================= */

"use client";

import { Footer, Header } from "@/components/layout";
import {
  DrivewayHero,
  ShopWithConfidence,
  SellSection,
  DriversSeat,
  HomeFaq,
  TrustPerksBar,
  HowItWorksSteps,
  CreditScoreBanner,
  CreditSpecialists,
} from "@/components/home/driveway";
import { Reviews } from "@/components/home";

const HomePage = () => {
  return (
    <>
      <main className="dw-font min-h-screen overflow-x-clip bg-white">
        <Header />
        <DrivewayHero />
        <TrustPerksBar/>
        <HowItWorksSteps/>
        <CreditScoreBanner/>
        <CreditSpecialists/>
        {/* <ShopWithConfidence />
        <SellSection />
        <DriversSeat /> */}
        <Reviews />
        <HomeFaq />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
