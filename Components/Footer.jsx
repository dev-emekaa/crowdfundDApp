import React from "react";

const Footer = () => {
  const productList = ["Market", "ERC20 Token", "Donation"];
  const contactList = ["support@wefund.com", "info@wefund.com", "Contact Us"];
  const usefullLink = ["Home", "About Us", "Company Bio"];

  return (
    <footer className=" text-center text-white backgroundMain lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left overflow-y-auto">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold md:justify-start">
              WeFund
            </h6>
            <p>
              Create Funding Campaigns for any Project or Charity. Receive
              donations in crypto.
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            {productList.map((product, i) => (
              <p className="mb-4" key={i + 1}>
                <a href="#!">{product}</a>
              </p>
            ))}
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful Links
            </h6>
            {usefullLink.map((link, i) => (
              <p className="mb-4" key={i + 1}>
                <a href="#!">{link}</a>
              </p>
            ))}
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            {contactList.map((contact, i) => (
              <p className="mb-4" key={i + 1}>
                <a href="#!">{contact}</a>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="backgroundMain p-6 text-center">
        <span>© 2021 WeFund. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
