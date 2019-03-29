import React from "react";

const Header = require("../components/header").default;
class About extends React.Component{
  render(){
    return(
      <div style={{ color: `teal` }}>
        <Header/>
        <p>Such wow. Very React.</p>
      </div>
    )
  }
}
export default About;