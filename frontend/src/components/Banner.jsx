import React from "react";
import Me from '../assets/me.png';
import { FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  return (
    <section className="min-h-[85vh] lg-min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg: text-left">
            <h1  className="text-[55px] font-bold leading-[0.8] lg: text-[110px]">
               GrandidaFx
            </h1>
            <div className="mb-6 text-[36px] lg: text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="text-white mr-4 ">Send Crypto</span> 
              <TypeAnimation sequence={[
                'To Brazil', 2000, 'To France', 2000, 'To Nigeria', 2000, 'To Egypt', 2000,'To UAE', 2000, 
              ]} speed={50} className='text-accent' wrapper="span" repeat={Infinity} />
            </div>
            <p className="mb-8 max-w-lg mx-auto lg: mx-0">you can securely trade Bitcoin, Ethereum, and other popular cryptocurrencies at competitive rates.</p>
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg: mx-0">
              <a href="#">
                <FaGithub/>
              </a>
              <a href="#">
                <FaTwitter/>
              </a>
              <a href="#">
                <FaLinkedin/>
              </a>
            </div>
          </div>

          
          <div className="hidden lg:flex flex-1 max-w-[320px] lg: max-w-[482px] mx-auto">
            <img src={Me} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;