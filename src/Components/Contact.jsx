import React from "react";
import { PORTFOLIO_DATA } from "../constants/data";

const Contact = () => {
  const { phone, email, address } = PORTFOLIO_DATA.personalInfo;
  
  const contactCards = [
    { icon: "fa-solid fa-phone", label: "Phone", value: phone, href: `tel:${phone}` },
    { icon: "fa-solid fa-envelope", label: "Email", value: email, href: `mailto:${email}` },
    { icon: "fa-solid fa-location-arrow", label: "Address", value: address, href: "#" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Contact Form Section */}
      <div className="animate__animated animate__fadeInLeft bg-zinc-800 p-6 rounded-lg">
        <h2 className="text-2xl text-green-400 mb-2">Let's work together</h2>
        <p className="text-sm text-neutral-400 mb-6">
          Coming together is a beginning. Keeping together is progress. Working together is success.
        </p>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Firstname" className="bg-[#1c1b22] text-white p-3 rounded outline-none border border-transparent focus:border-green-400 text-sm" />
          <input type="text" placeholder="Lastname" className="bg-[#1c1b22] text-white p-3 rounded outline-none border border-transparent focus:border-green-400 text-sm" />
          <input type="email" placeholder="Email address" className="bg-[#1c1b22] text-white p-3 rounded outline-none border border-transparent focus:border-green-400 text-sm sm:col-span-2" />
          <textarea rows="4" placeholder="Your message" className="bg-[#1c1b22] text-white p-3 rounded outline-none border border-transparent focus:border-green-400 text-sm sm:col-span-2"></textarea>
          <button type="submit" className="bg-green-400 text-black py-3 px-6 rounded-full font-bold hover:bg-green-500 transition-colors sm:col-span-2 w-fit">
            Send message
          </button>
        </form>
      </div>

      {/* Contact Details Cards */}
      <div className="flex flex-col justify-center gap-6 animate__animated animate__fadeInRight">
        {contactCards.map((card, index) => (
          <div key={index} className="flex items-center gap-4">
            <a href={card.href} className="bg-zinc-800 w-16 h-16 flex items-center justify-center rounded-lg hover:bg-green-400 hover:text-black text-green-400 transition-colors">
              <i className={`${card.icon} text-2xl`}></i>
            </a>
            <div>
              <p className="text-neutral-500 text-sm mb-1">{card.label}</p>
              <h6 className="text-white m-0 text-sm md:text-base">{card.value}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;