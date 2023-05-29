import React, { useState } from "react";
import Icon from "../assets/icons/Vector.svg";
import Razor from '../assets/razor.png'

function Form() {
  const [show, setShow] = useState(false);
  const [price, setPrice] = useState(149);
  function showHandler() {
    setShow(!show);
  }
  const handleRadioChange = (event) => {
    const selectedOption = event.target.value;

    if (selectedOption === "option1") {
      setPrice(211);
      setShow(true);
    } else if (selectedOption === "option2") {
      setPrice(176);
      setShow(false);
    } else if (selectedOption === "option3") {
      setPrice(117);
      setShow(false);
    }
  };
  return (
    <div className="bg-white w-[500px] h-[850px] rounded-md pd-20 mt-20">
      <div className="flex  mx-10 relative top-10 left-10 gap-x-[31%]">
        <div className="">
          <p className="bg-[#0096FF] w-[50px] h-[50px] rounded-full flex items-center justify-center text-white p-2 text-3xl font-bold">
            1
          </p>
          <p>Sign Up</p>
        </div>
        <div className="pl-[21%]">
          <p className="bg-[#0096FF] w-[50px] h-[50px] rounded-full flex items-center justify-center text-white p-2 text-3xl font-bold">
            2
          </p>
          <p className="relative right-[11%]">Subscribe</p>
        </div>
      </div>

      <div className="text-center relative top-10 p-5">
        <p className="text-black font-[Roboto, 'sans'] text-[18px]">
          Select your subscription plan
        </p>
      </div>
      <div className="flex flex-wrap gap-3 justify-center">

        <label className="cursor-pointer opacity-50">
          <input type="radio" class="peer sr-only" name="pricing" disabled />
          <div className="w-[450px] max-w-xl rounded-md bg-white p-2 relative top-10 text-gray-600 ring-2 ring-[#47BA68] transition-all hover:shadow peer-checked:text-[#47BA68] peer-checked:ring-[#47BA68] peer-checked:ring-offset-2">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                    />
                  </svg>
                  <p className="bg-[#ff0000] absolute bottom-[70%] left-20 px-8 rounded-b-md text-sm text-white">
                      Offer Expired
                    </p>
                  <p className="text-sm font-semibold text-gray-500">
                    12 Months Subscription
                  </p>
                </div>
                <div>
                  <p>
                    Total <span class="text-lg font-bold">₹ 99</span>
                  </p>
                  <p className="text-sm font-bold">₹8 / mo</p>
                </div>
              </div>
              <div className="flex items-end justify-between text-gray-500"></div>
            </div>
          </div>
        </label>
        <label className="cursor-pointer">
          <input
            type="radio"
            class="peer sr-only"
            name="pricing"
            onClick={showHandler}
            value="option1"
            onChange={handleRadioChange}
          />
          <div className="w-[450px] max-w-xl relative top-10  rounded-md bg-white p-2 text-gray-600 ring-2 ring-[#47BA68] transition-all hover:shadow peer-checked:text-[#47BA68] peer-checked:ring-[#47BA68] peer-checked:ring-offset-2">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                    />
                  </svg>
                  
                  <p className="text-sm font-semibold text-gray-500">
                    12 Months Subscription
                  </p>
                  {show && (
                    <p className="bg-[#47BA68] relative bottom-6 right-[31%] px-6 rounded-b-md text-sm text-white">
                      Recommended
                    </p>
                  )}
                </div>
                <div>
                  <p>
                    Total <span class="text-lg font-bold">₹ 179</span>
                  </p>
                  <p className="text-sm font-bold">₹15 / mo</p>
                </div>
              </div>
              <div className="flex items-end justify-between text-gray-500"></div>
            </div>
          </div>
        </label>
        <label className="cursor-pointer">
          <input
            type="radio"
            class="peer sr-only"
            name="pricing"
            value="option2"
            onChange={handleRadioChange}
          />
          <div className="w-[450px] max-w-xl relative top-10  rounded-md bg-white p-2 text-gray-600 ring-2 ring-[#47BA68] transition-all hover:shadow peer-checked:text-[#47BA68] peer-checked:ring-[#47BA68] peer-checked:ring-offset-2">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                    />
                  </svg>
                  <p class="text-sm font-semibold text-gray-500">
                    6 Months Subscription
                  </p>
                </div>
                <div>
                  <p>
                    Total <span class="text-lg font-bold">₹ 149</span>
                  </p>
                  <p class="text-sm font-bold">₹25 / mo</p>
                </div>
              </div>
              <div class="flex items-end justify-between text-gray-500"></div>
            </div>
          </div>
        </label>
        <label class="cursor-pointer">
          <input
            type="radio"
            class="peer sr-only"
            name="pricing"
            value="option3"
            onChange={handleRadioChange}
          />
          <div className="w-[450px] max-w-xl relative top-10 rounded-md bg-white p-2 text-gray-600 ring-2 ring-[#47BA68] transition-all hover:shadow peer-checked:text-[#47BA68] peer-checked:ring-[#47BA68] peer-checked:ring-offset-2">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                    />
                  </svg>
                  <p className="text-sm font-semibold text-gray-500">
                    3 Months Subscription
                  </p>
                </div>
                <div>
                  <p>
                    Total <span class="text-lg font-bold">₹ 99</span>
                  </p>
                  <p className="text-sm font-bold">₹33 / mo</p>
                </div>
              </div>
              <div class="flex items-end justify-between text-gray-500"></div>
            </div>
          </div>
        </label>
      </div>

      <div className="h-[1px] hr relative top-20 left-7 bg-gray-500 "></div>
      <div className="flex justify-around p-2 relative top-20 ">
        <p className="relative right-6 text-gray-600 ">Subscription Fee</p>
        <p className="font-bold text-gray-600 relative left-7 ">₹18,500</p>
      </div>
      <div className="border-2 border-red-600 relative top-20 left-10 w-5/6 rounded-md bg-red-200">
        <div className="p-2 flex justify-between">
          <p className="text-[#DE4313] font-bold">Limited time offer</p>
          <p className="text-gray-600 font-bold">- ₹18,401</p>
        </div>
        <div className="flex p-2">
          <img
            src={Icon}
            alt=""
            height={24}
            width={24}
            className="text-[#DE4313]"
          />
          <p className="text-[#DE4313] ml-2">
            Offer valid till 25th March 2023{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-around p-2 relative top-20 ">
        <p className="relative right-4 top-1 text-gray-600">
          <span className="font-bold "> Total </span>(Incl. of 18% GST)
        </p>
        <p className="font-bold text-gray-700 text-2xl">{`₹ ${price}`}</p>
      </div>
      <div className="flex relative top-10 justify-evenly  w-full items-center">
        <button className="border-2 m-2  relative top-10  border-[#F77171] p-[10px] w-[250px] rounded-[4px]">
          CANCEL
        </button>
        <button className="p-[10px] m-2 bg-[#47BA68] relative top-10  rounded-[4px] w-[250px] text-white">
          PROCEED TO PAY
        </button>

      </div>
      <div className="w-600 relative top-20 left-2">
        <img src={Razor} alt="Razorpay" />
      </div>
    </div>
  );
}

export default Form;
