import { useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  console.log(location);
  return <div className='breadcrumbs'></div>;
}

export default Breadcrumbs;
