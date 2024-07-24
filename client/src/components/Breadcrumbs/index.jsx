import { Link } from 'react-router-dom';

import './style.css';

// This is a dummy test.


const Breadcrumbs = ({ current, links }) => {
  return (
    <div className="breadcrumbs">
      <div className="breadcrumb_body">
        {links.map((item, index) => (
          <div key={index} className="breadcrumbs_item">
            <Link className="breadcrumbs_link" to={item.link}>{item.title}</Link>
          </div>
        ))}
        <div className="breadcrumbs_item">{current}</div>
      </div>
    </div>
  )
}

export default Breadcrumbs;
