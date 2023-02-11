import ServiceItem from "./ServiceItem";
import SERVICE__DATA from "../../data/service-data";
import { Fragment } from "react";

function ServiceSection() {
  const serviceItem = SERVICE__DATA.map((item) => {
    return <ServiceItem title={item.title} content={item.content} />;
  });
  return (
    <Fragment>
      <section className="my-12">
        <h1 className="text-center"> Make an Impact in Your World!</h1>
        <h2 className="text-xl text-center">
          {" "}
          At Global Impact Church, kingdom service is fun & exciting. Join our
          growing list of volunteers who are making an impact every week.
        </h2>
      </section>
      <article className=" flex flex-wrap justify-center gap-10">
        {serviceItem}
      </article>
      <h1 className="text-center mt-10"> Ready to serve?</h1>
      <div className="w-full flex items-center">
        <button className="py-2 px-16 mt-4  hover:bg-blueColor  hover:text-white   rounded-3xl border border-blueColor mx-auto">
          Sign Up Here
        </button>
      </div>
    </Fragment>
  );
}

export default ServiceSection;
