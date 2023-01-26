import { Link, useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  return (
    <div>
      <Link to={'/'}> a Home </Link>
      About
    </div>
  )
}

export default About;