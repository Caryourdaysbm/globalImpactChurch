import shadowImg from "../../assets/Images/happy-group.jpg";

function BroxConnect() {
  return (
    <section className="py-10">
      <h1 className="text-center text-3xl mb-6">BroXConnect</h1>
      <div className="flex flex-col gap-10 md:flex-row justify-between">
        <div className="space-y-8 text-gray-400 ">
          <p className="">
            BrooXConnect is a unique group for productive minded singles on a
            mission of self-discovery. The generality of members are within the
            ages of 20 years and above whilst named BrooXConnect Plus exists for
            30 years and above who are majorly modern, working, business class
            singles.
          </p>{" "}
          <p>
            Our approach is to constantly engage each other maturely in
            discussions and healthy interactions that touch different aspects of
            everyday live from the view of a single individual.
          </p>{" "}
          <p>
            These interactions can be in the areas of Business and career,
            relationship, finance and investment, life skills, etc A key goal we
            pursue is the mutual exchange of value. We have quarterly outings
            with all our members drawn across the various GIC Centres as well as
            non-GIC members.
          </p>
          <p>
            We welcome you to an interactive family full of bonding, friendship,
            fun, laughter, relaxation, learning and development. We are deeply
            honoured to welcome you to Broox.
          </p>
          <button className="py-2 px-16   hover:bg-blueColor  hover:text-white   rounded-3xl border border-blueColor  text-blueColor">
            SignUp Today
          </button>
        </div>
        <img src={shadowImg} className="w-full md:w-1/2 object-cover" />
      </div>
    </section>
  );
}

export default BroxConnect;
