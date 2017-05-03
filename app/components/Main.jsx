var React = require('react');
var Nav = require('Nav');


// var Main = React.createClass({
//   render: function() {
//     return (
//       <div className="travis">
//         <Nav/>
//         <h2>Main component baby!</h2>
//         {this.props.children}
//       </div>
//     );
//   }
// });

var Main = (props) => {
  return (
    <div className="travis">
      <Nav/>
      <h2>Main component baby!</h2>
      {props.children}
    </div>
  );
}

module.exports = Main;
