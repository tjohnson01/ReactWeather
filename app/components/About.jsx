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
    <h3>About Component</h3>
  )
};


module.exports = About;
