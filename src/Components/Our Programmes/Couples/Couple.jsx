function Couple(props) {
  return (
    <article className="p-5 shadow-xl border border-blue-600 w-[20rem] rounded-xl">
      <h1>{props.title}</h1>
      <ul className="space-y-1 mt-4">
        <li className="text-lg uppercase text-blueColor font-bold mb-2">
          {props.years}
        </li>
        <li>
          <span className="font-bold text-blueColor">Leaders: </span>
          {props.leader}
        </li>
      </ul>
      <button className="border border-blue-600 hover:bg-black hover:text-white hover:border-transparent text-lg py-2 px-6 rounded-md mt-4">
        Join here
      </button>
    </article>
  );
}
export default Couple;
