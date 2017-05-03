var React = require('react');

//
// var WeatherMessage = React.createClass({
//     render: function() {
//       var {temp, location} = this.props;
//
//       return (
//         <div>
//           <p>The weather for: {location} is {temp}</p>
//         </div>
//       );
//     }
// });

var WeatherMessage = ({temp, location}) => {
  
  return (
    <div>
      <p>The weather for: {location} is {temp}</p>
    </div>
  );
}


module.exports = WeatherMessage;
