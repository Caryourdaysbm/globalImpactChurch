import JuniorChurchCard from "../Components/Our Programmes/JuniorChurch";
import data from "../Components/data/junior-church";
import JuniorChurchText from "../Components/Our Programmes/JuniorChurchText";
import BroxConnect from "../Components/Our Programmes/BroxConnect";
import CoupleSection from "../Components/Our Programmes/Couples/CoupleSection";
import ServiceSection from "../Components/Our Programmes/ServiceUnit/ServiceSection";

function OurProgrammes() {
  const juniorChurchData = data.map((item) => {
    return (
      <JuniorChurchCard
        image={item.image}
        title={item.title}
        agerange={item.ageRange}
        key={item.id}
      />
    );
  });
  return (
    <section className="max-w-6xl mx-auto p-10">
      <JuniorChurchText />
      <section className="flex flex-col justify-between gap-8  items-center md:flex-row">
        {juniorChurchData}
      </section>
      <BroxConnect />
      <CoupleSection />
      <ServiceSection />
    </section>
  );
}
export default OurProgrammes;

{
  /* <h1 className="text-center text-3xl mb-5">Our Programmes</h1>
<p className="small-text-center">
  We have different programmes for different people and ages. Our goal is
  to come help you to help develop your full God-given potential in a safe
  space that won't hinder your spiritual growth.
</p> */
}
