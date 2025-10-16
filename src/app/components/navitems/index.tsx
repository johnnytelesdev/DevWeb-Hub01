import { url } from "inspector";
 
export interface NavItemInterface {
  url: string;
  label: string;
}

export default function NavItem(props: NavItemInterface) {
  return (
    <li className="nav-item">
      <a href={props.url} className="nav-link">
       {props.label}
      </a>
    </li>
  );
}