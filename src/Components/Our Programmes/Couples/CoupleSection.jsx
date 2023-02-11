import Couple from "./Couple";
import COUPLES__DATA from "../../data/couples-data";

function CoupleSection() {
  const coupleCard = COUPLES__DATA.map((item) => {
    return (
      <Couple
        key={item.id}
        title={item.title}
        leader={item.leaders}
        years={item.years}
      />
    );
  });

  return (
    <section>
      <h1 className="text-center mb-10">Couple's Club</h1>
      <section className="flex flex-wrap justify-center items-center gap-14">
        {coupleCard}
      </section>
    </section>
  );
}
export default CoupleSection;
