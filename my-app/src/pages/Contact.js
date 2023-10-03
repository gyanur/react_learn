import "./index.css";
import lady from "./lady.jpg"; // Import the image without the "./src/pages" part

const Contact = () => {
  return (
    <div>
      <div  style ={{ width: '100%', height: '100vh', background: `url(${lady}) no-repeat`, backgroundSize: 'contain', objectPosition: 'centre' }}> 
   <h2 style={{ textAlign: 'center', color: 'black'}}>Contact Us</h2>
   <form>
    <div className="text">
    <div className="mb-3">
        <label for="exampleInputFirstName" className="form-label">FirstName:</label>
        <input type="FirstName" className="form-control" id="exampleInputFirstName"/>
    </div>

  <div className="mb-3">
    <label for="exampleInputLastName" className="form-label">LastName:</label>
    <input type="LaststName" className="form-control" id="exampleInputLastName"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address:</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password:</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</div>
  </form>
  </div>
  </div>
  );
}

export default Contact;
