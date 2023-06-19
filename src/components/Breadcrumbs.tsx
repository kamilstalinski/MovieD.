import { useLocation, Link } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <div className='crumb' key={crumb}>
          <Link to={currentLink}>
            {crumb.includes("%20") ? crumb.replace(/%20/g, " ") : crumb}
          </Link>
        </div>
      );
    });

  return <div className='container breadcrumbs'>{crumbs}</div>;
}

export default Breadcrumbs;
