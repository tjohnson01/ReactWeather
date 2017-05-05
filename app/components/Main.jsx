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
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
