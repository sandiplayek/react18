import Navbar from "./Components/Navbar";
import useFetch from "./Hook/useFetch";
import { Helmet } from "react-helmet";
import Leftpanel from "./Leftpanel";
export default function About()
{
    const data = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
      <>
      
      <Helmet>
        <title>About page</title>
        <meta name="description" content="About page Helmet application" />
      </Helmet>
      <Navbar/>
      <div className="parent">
        <Leftpanel />
        <div className="bodyContent">
        
        <div>About</div>
        {data &&
          data.map((item) => {
            return  <p key={item.id}>{item.title}</p>
            })}

          --------------------------------------------
          {data && data.map((fruit) => (
                    <div key={fruit.id}>
                        {fruit.title}
                    </div>
                ))}
        </div>
        </div>
      </>
    );
  
    
}