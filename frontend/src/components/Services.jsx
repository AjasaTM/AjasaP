import React from 'react';
import Card from './Card';
import { BsShieldShaded } from "react-icons/bs";
import { BiSearchAlt, BiBoltCircle } from "react-icons/bi";

const Services = () => {
  return (
    <section id='Services'>
      <div className="flex w-full justify-center items-center gradient-bg-services">
        <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
          <div className="flex-1 flex flex-col justify-start items-start">
            <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
              Our Services
            </h1>
          </div>
          <div className="flex-1 flex flex-col justify-start items-center">
            <Card
              color="white"
              title="Fastest transactions"
              icon={<BiBoltCircle fontSize={21} className="text-white" />}
              subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
            />
            <Card
              color="yellow"
              title="Best exchange rates"
              icon={<BiSearchAlt fontSize={21} className="text-white" />}
              subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
            />
            <Card
              color="purple"
              title="Security guarantee"
              icon={<BsShieldShaded fontSize={21} className="text-white" />}
              subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
