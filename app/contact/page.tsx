import React from "react";

const Contact = () => {
  return (
    <>
      <section id="contactus">
        <div className="container p-20">
          <div className="contactus">
            <div className="contactus-right">
              <h2 className="section-title !text-center font-bold">
                Contact Us
              </h2>
              <p className="section-des mt-5 w-5/6">
                For any app-related inquiries, technical issues, or general
                assistance, our customer support team is ready to lend a helping
                hand. You can reach us via email at info@ehsanghaffarii.ir or
                through the contact form below.
              </p>
            </div>
            <div className="contactus-left">
              <img
                className=" rounded-lg"
                src="contactus.jpg"
                alt="contactus"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
