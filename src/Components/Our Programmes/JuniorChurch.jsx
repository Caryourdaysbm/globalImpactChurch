function JuniorChurchCard(props) {
  return (
    <figure className="max-w-[15rem]  bg-gray-100 rounded-t-lg">
      <img
        src={props.image}
        className="image-junior w-96 h-48 object-cover rounded-t-lg hover:scale-90 transition-all duration-500"
      />
      <figcaption>
        <h2 className="junior-heading">{props.title}</h2>
        <p className="text-md pb-5 pt-3">{props.agerange}</p>
        <p>
          <a href="#" className="join--here">
            Join Now
          </a>
        </p>
      </figcaption>
    </figure>
  );
}

export default JuniorChurchCard;
