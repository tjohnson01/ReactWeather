var React = require('react');
//
// var About = React.createClass({
//   render: function () {
//     return(
//       <h3>About Component</h3>
//     )
//   }
// });
//
//  Functional stateless component (only has render method, doesnt have any state)
// var About = function ( props ){
//   return(
//     <h3>About Component</h3>
//   )
// };
//
// Functional stateless component with arrow
var About = ( props ) => {
  return(
    <div>
      <h1 className="subheader text-center">About Component</h1>
      <p className="text-justify">This is a weather application and test project using React</p>
      <p className="text-justify">Here are some of the tools I used</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a>
        </li>
        <li>
          <a href="http://foundation.zurb.org">Foundation 6</a>
        </li>
      </ul>
    </div>
  )
};


module.exports = About;
