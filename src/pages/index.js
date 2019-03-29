import React from "react";
import {Link} from "gatsby";
class Index extends React.Component{
  render(){
    return(
      <div>
        <Link to={"/concat/"}>about</Link>
        <h1>This is homepage.</h1>
      </div>
    )
  }
}
export default Index;
