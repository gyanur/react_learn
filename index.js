//ReactDOM.render( <h1 ></h1> my name ruchi</h1> , document.getElementById("root"));



/*challenge - react the above line of code in vanilla js bycreating and appending an h1 to our div#root(without using innerHtml).

- creact a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the divv# root
*/

// const h1 = document.createElement("h1")
// h1.textContent ="This is an imprative way to program"
// h1.className ="header"
// document.getElementById("root").append(h1)
 
// jsx

    // ReactDOM.render(<h1 className="header">this is jsx</h1>,document.getElementById("root"))

/* 
 creat a navbar in jsx:
      - use the semantic 'nav' element as the parent wrapper
      -have an h1 element with the brand name of your "website"
      -insert an unorderd listfor the other nav elements
      - inside the "ul" have three 'li's for "pricing",
      "About", and "contact"
      -  Dont't  worry about styling yet - it'll just be looking Html for now
      
     
      
      const navbar = (
        <nav>
            <h1>Bob's Bistro</h1>
            <ul>
                <li>pricing</li>
                <li>About</li>
                <li> contact</li>
            </ul>
        </nav>
      )

      ReactDOM. render( navbar,document.getElementById("root"))
      */

    //import ReactDOM from "react" 
    // import ReactDOM from "react-dom"

      /**
       challenge: find out what happens if we try to append jsx to our div#root using .append() instead of ReactDOM

       1. create a simple page in jsx(> 4 element) and save the variable
       2. select the div with thr ID of "root" and use '.append'to append your jsx
       3. see if you can guess what will show up in the bowser before running code 
       4. see i you can explain what actullay shows up in the browser   
       
      */

    /* const page = (
        <div>
            <h1>my awesome website in Reatc</h1>
            <h3>Reason I Love React</h3>
            <ol>
                <li>It's composable</li>
                <li> It's declearative</li>
                <li> It's a hireable skill </li>
                <li>It's actively maintained by skilled pepople</li>
            </ol>
        </div>
       )

      ReactDOM.render(page,document.getElementById("root"))
       // document.getElementById("root").append( JSON.stringify(page))
*/

//import React from "react";
//import ReactDOM from "react-dom";

const page = (
  <div>
    <h1>Fun Facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including...</li>
    </ul>
  </div>
);
ReactDOM.render(page, document.getElementById("root"));