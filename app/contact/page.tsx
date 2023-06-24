import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <>
      <section id="contactus">
        <div className="container p-20">
          <div className="contactus">
            <div className="contactus-right">
              <h2 className="section-title font-bold">ارتباط با ما</h2>
              <p className="section-des mt-5 !text-right w-96">
              نظرات و پیشنهادات شما ما را در بهبود کیفیت خدمات کمک می‌کند. لطفاً با ما از طریق ایمیل در تماس باشید. همچنین میتوانید درباره هرگونه همکاری با ما صحبت کنید، با خوشحالی پاسخگوی شما خواهیم بود.
              </p>
              <div className="contactus-infos">
                <div className="contactus-info">
                  <div className=" w-14 bg-gray-100 rounded-lg py-2 px-2">
                    <FontAwesomeIcon icon={['fas', 'envelope']} className=" text-green-300" />
                  </div>
                  <div className="contactus-info-info">
                    <p className="contactus-info-info-title">ایمیل</p>
                    <p className="contactus-info-info-des">
                      denizpaz.desserts@gmail.com
                    </p>
                  </div>
                </div>
                <div className="contactus-info">
                <div className=" w-14 bg-gray-100 rounded-lg py-2 px-2">
                    <FontAwesomeIcon icon={['fas', 'phone']} className=" text-green-300" />
                  </div>
                  <div className="contactus-info-info">
                    <p className="contactus-info-info-title">تلفن</p>
                    <p className="contactus-info-info-des">0936-7596868</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contactus-left">
              <img
                className="contactus-left-img"
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
