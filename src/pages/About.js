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
        
        <div>About page: using useFetch custom hook</div>
        {data &&
          data.map((item, index) => {
            return  index<5 && <p key={item.id}>{item.title}</p>
            })}

          --------------------------------------------
          {data && data.map((fruit,index2) => (index2<5 && 
                    <div key={fruit.id}>
                        {fruit.title}
                    </div>
                ))}
        </div>
        </div>
      </>
    );
  
    
}