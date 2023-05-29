import React from "react";
import { IconData } from "../constants/constants";
import Form from "./Form";

function Content() {
  return (
    <div
      className="flex justify-evenly relative top-20 min-h-[100vh]"
    >
      <div className="w-[960px]">
        <p className="text-white font-bold font-[Raleway, 'sans'] text-[56px] px-16 py-16">
          Access curated courses worth
          <span className="font-[Roboto,'sans'] relative text-white"><s> ₹18,500 </s></span> at just ₹{" "}
          <span className="font-[Roboto, 'sans'] text-[#0096FF]">99</span> per year!
        </p>
        <div className="flex ">
          <div className="flex-col pl-16 ">
            {IconData.map((item) => (
              <ul>
                <li>
                  <img src={item.icon} alt="" />
                </li>
              </ul>
            ))}
          </div>
          <div className="grid place-items-center ml-16 text-2xl text-white font-[Roboto,'sans']">
            <p>
              <span className="text-[#0096FF]">100+</span> Job relevant courses{" "}
            </p>
            <p>
              <span className="text-[#0096FF]">20,000+</span> Hours of content
            </p>
            <p>
              <span className="text-[#0096FF]">Exclusive</span> webinar access
            </p>
            <p>
              Scholarship worth <span className="text-[#0096FF]">₹94,500</span>
            </p>
            <p>
              <span className="text-[#0096FF]">Ad Free</span> learning
              experience
            </p>
          </div>
        </div>
      </div>
      <Form />
    </div>
  );
}

export default Content;