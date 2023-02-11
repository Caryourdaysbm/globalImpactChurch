import { AiOutlineArrowRight } from "react-icons/ai";

function Buttons(props) {
  return (
    <div>
      <a className="home-btn" href={props.href}>
        {props.children}
        <AiOutlineArrowRight className="font-bold text-2xl" />
      </a>
    </div>
  );
}
export default Buttons;
