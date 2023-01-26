import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllRecipes } from "../../services/api";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllRecipes().then(resp => {
      setData(resp);
    }).catch(console.log);
  }, []);

  const clickToAbout = () => {
    navigate('/about', {
      state: {
        chachara: "adasd"
      }
    });
  }

  return (
    <div>
      <div>
        { data ? (<div>true</div>) : (<div>false</div>)}

      </div>
      <button onClick={clickToAbout}>Ir a About</button>
    </div>
  )
}

export default Home;