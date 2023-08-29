import "./Selector.css";

interface Props {
  name: string;
  type: "boitier" | "fond" | "couronne" | "bracelet" | "aiguilles";
}

function Selector(props: Props) {
  return <p>this is a Selector</p>;
}

export default Selector;
