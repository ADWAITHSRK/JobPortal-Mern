import React from "react";
import Navbar from "../../projectComponents/Navbar/Navbar.jsx";
import Hero from "../../projectComponents/Hero/Hero.jsx";
import Footer from "../../projectComponents/Footer/Footer.jsx";
import MainJobs from "../../projectComponents/MainJobs/MainJobs.jsx";

const Home = () => {
  return (
    <div className="flex flex-col gap-3 min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto flex flex-col flex-grow pb-10">
        <Hero />
        <MainJobs />
      </main>

      <footer className="mt-auto w-full ">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
