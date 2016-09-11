var GreeterMessage = React.createClass({
  render: function () {
    return (
      <div>
        <h1>H1</h1>
        <p>Paragraph</p>
      </div>
    );
  }
});
var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    console.log('button clicked');
    var name = this.refs.name.value;
    if (name.length > 0) {
      this.refs.name.value = '';
      console.log('name changed')
      this.props.onNewName(name);
    }
  },
  render: function () {// fires when user clicks on submit
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/>
        <button>Set Name</button>
      </form>

    );
  }
});
var Greeter = React.createClass({
  //for assigning default values
  getDefaultProps: function () {
    return {
      name: 'React',
      msg: 'This is the default message'
    };
  },
  getInitialState: function () {
    return {
      name: this.props.name
    };
  },
  handleNewName: function (name) {
    this.setState({
      name: name
    });
  },
  render: function () {
    var name = this.state.name;
    var msg = this.props.msg;

    return (
      <div>
        <h1>Hello {name}</h1>
        <p>{msg + '!!'}</p>
        <GreeterMessage/>
         {/* use the same name to refer the handler
        // the handler name is NewName
        //on is referred in the child component GreeterForm is a presenter component
        // parent component Greeter is a container component */}
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }
});

var firstName = 'Raj';
ReactDOM.render(
  <Greeter name={firstName} msg="Message from prop!"/>,
  document.getElementById('app')
);
