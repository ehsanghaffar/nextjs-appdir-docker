import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="container py-20">
      <div className="grid gap-6">
        <div className="flex flex-col mx-auto gap-2">
          <h2 className="section-title">درباره ما</h2>
          <span className=" self-center h-1 bg-red-600 lg:w-1/3"></span>
          <p className="section-des">دوست دارین که بدونین ما کی هستیم؟</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="w-30 h-30" src="me.png" alt="me" />
          <p className="aboutus-info-title">دنیز آریان</p>
          <p className="w-full text-xl mt-4">
            سالهاست به صورت تخصصی روی انواع دسر ها، شیرینی ها، کیک ها و نان ها
            کار میکنم و اینجام که تجربیات خودمو با شما به اشتراک بزارم تا شما هم
            لذت دسر های دنیز پز رو بچشید.
          </p>
        </div>
        <div className="aboutus-counts">
          <div className="aboutus-count">
            <p className="aboutus-count-num">5+</p>
            <p className="aboutus-count-des">سال سابقه قنادی</p>
          </div>
          <div className="aboutus-count">
            <p className="aboutus-count-num">150+</p>
            <p className="aboutus-count-des">رسپی انواع دسر</p>
          </div>
          <div className="aboutus-count">
            <p className="aboutus-count-num">100%</p>
            <p className="aboutus-count-des">رسپی ها تست شده</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
