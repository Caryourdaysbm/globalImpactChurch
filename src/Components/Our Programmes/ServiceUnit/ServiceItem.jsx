function ServiceItem(props) {
  return (
    <hgroup className="w-56">
      <h1 className="text-center md:text-left">{props.title}</h1>
      <p className="text-center text-gray-400 md:text-left">{props.content}</p>
    </hgroup>
  );
}

export default ServiceItem;
