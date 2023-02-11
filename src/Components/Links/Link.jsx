import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLinks(props) {
  const resolvedPath = useResolvedPath(props.to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className="list-none">
      <Link className="" to={props.to} onClick={props.onClick}>
        {props.children}
      </Link>
    </li>
  );
}
export default CustomLinks;
