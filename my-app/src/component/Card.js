import logo1 from "./fruits.png"; // Change the identifier to logo1
import logo2 from "./fresh.png";    // Change the identifier to logo2
import logo3 from "./Eat.png";   //change the identifier to logo3
import logo4 from "./str.png";
/*
notes:
 - Only render 1 instead (I already did this for you)
 - The star icon and photo(katie- Zaferes.png)
   folder for your use
 - Make sure to include:
   - image
   - star icon(star.png), rating, and review count
   - title
   - const/person
*/

function Card() {
  return (
    
    <div className="top">

    <div className="job">
      <div className="next">
        <img src={logo1} alt="logo1" className="main"/>
       </div>

      <div>
        <img src={logo4} alt="logo4" className="str" />
         <span>5.0</span>
         <span> (6).</span>
         <span>India</span>
          <p>Life Easy And Healthy </p>
      </div>
      </div>

      
        <div className="job"> 
          <div className="next">
            <img src={logo2} alt="logo2"className="main" />
          </div>

            <div>
             <img src={logo4} alt="logo4" className="str"/>
             <span className="gray">6.0</span>
             <span className="gray">(8).</span>
             <span>USA</span>
             <p> The Right Way To Consume Fruits</p>
           </div>
         </div>
        
      

      <div className="job">
        <div className="next">
           <img src={logo3} alt="logo3" className="main" />
        </div>

      <div>
         <img src={logo4} alt="logo4" className="str"/>
         <span className="gray">5.0</span>
         <span className="gray"> (6).</span>
         <span>India</span>
          <p> The Fruits Diet Miracle</p>
      </div>
      </div> 

    
 </div>  

  );
}

export default Card;
