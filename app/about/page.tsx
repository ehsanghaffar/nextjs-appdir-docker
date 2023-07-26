import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="container py-20">
      <div className="grid gap-6">
        <div className="flex flex-col mx-auto gap-2">
          <h2 className="section-title">About Us</h2>
          <span className=" self-center h-1 bg-red-600 lg:w-1/3"></span>
          <p className="section-des">
          Welcome to Foodie Delights - Your Go-To Recipe App!
            </p>
        </div>
        <div className="flex flex-col text-center justify-center items-center gap-4">
          <img className="w-30 h-30" src="me.png" alt="me" />
          <p className="aboutus-info-title">Cooker</p>
          <p className="w-3/4 text-base mt-4">
          At Foodie Delights, we believe that food brings people together, creates memories, and sparks joy. Our mission is to inspire and empower both aspiring and seasoned chefs to explore the world of culinary delights right from the comfort of their homes. Whether you are a cooking enthusiast or just getting started in the kitchen, Foodie Delights has something for everyone.
          </p>
          <div className="flex flex-col justify-center items-center text-center mt-3">
            <h3 className=" text-2xl">
            Our Recipe Collection
            </h3>
            <p className="w-3/4 text-base mt-4">
            We take pride in curating a diverse and extensive recipe collection that spans cuisines from all corners of the globe. Our team of passionate food experts works tirelessly to bring you the most delicious and authentic recipes that are easy to follow and recreate. From traditional family favorites to contemporary twists on classic dishes, there is always something new to explore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
