import React, { useState } from "react";

const Hero = ({ titleData, createCampaign }) => {
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    amount: "",
    deadline: "",
  });

  const createNewCampaign = async (e) => {
    e.preventDefault();

    try {
      const data = await createCampaign(campaign);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="relative">
      <span className="coverLine"></span>
      <img
        src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        alt=""
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative bg-opacity-75 backgroundMain">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          ></path>
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className=" flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none">
                WeFund <br className="hidden md:block" />
                CrowdFunding
              </h2>
              <p className=" max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                Decentralised Crowdfunding. Create Campaigns to raise funds for
                any Project, Charity or cause.
              </p>
              <a
                href="/"
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200  hover:text-teal-700 text-gray-200"
              >
                Learn More
                <svg
                  className="inline-block w-3 ml-2 fill-white bg-white "
                  viewBox="0 0 12 12"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 7L5.5 5.5M15 7L16.5 5.5M5.5 16.5L7 15M11 5L11 3M5 11L3 11M17.1603 16.9887L21.0519 15.4659C21.4758 15.3001 21.4756 14.7003 21.0517 14.5346L11.6992 10.8799C11.2933 10.7213 10.8929 11.1217 11.0515 11.5276L14.7062 20.8801C14.8719 21.304 15.4717 21.3042 15.6375 20.8803L17.1603 16.9887Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </svg>
              </a>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Campaign
                </h3>
                <form action="">
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="inline-block mb-1 font-medium "
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      onChange={(e) =>
                        setCampaign({
                          ...campaign,
                          title: e.target.value,
                        })
                      }
                      placeholder="title"
                      required
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
                      id="firstName"
                      name="firstName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="description"
                      className="inline-block mb-1 font-medium "
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      onChange={(e) =>
                        setCampaign({
                          ...campaign,
                          description: e.target.value,
                        })
                      }
                      placeholder="description"
                      required
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
                      id="description"
                      name="description"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="amount"
                      className="inline-block mb-1 font-medium "
                    >
                      Target Amount
                    </label>
                    <input
                      type="text"
                      onChange={(e) =>
                        setCampaign({
                          ...campaign,
                          amount: e.target.value,
                        })
                      }
                      placeholder="amount"
                      required
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
                      id="amount"
                      name="amount"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="date"
                      className="inline-block mb-1 font-medium "
                    >
                      Deadline
                    </label>
                    <input
                      type="date"
                      onChange={(e) =>
                        setCampaign({
                          ...campaign,
                          deadline: e.target.value,
                        })
                      }
                      placeholder="Date"
                      required
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
                      id="date"
                      name="date"
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      onClick={(e) => createNewCampaign(e)}
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none newColor"
                    >
                      Create Campaign
                    </button>
                  </div>
                  <p className=" text-xs text-gray-600 sm:text-sm">
                    Create Your Campaign and Raise Funds
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
