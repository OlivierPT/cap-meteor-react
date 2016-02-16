import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';


export class SignInForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log("SignInForm.handleSubmit!");

    event.preventDefault();

    // Find the text field via the React ref
    var username = this.refs.username.getValue().trim();
    var password = this.refs.password.getValue().trim();

    Meteor.loginWithPassword(
      username, password, function(error, result) {
        if (error) {
          this.error = 'Login error - ' + error;
          console.log('Login error - ' + error);
        } else {
          FlowRouter.go('/');
        }
      })

    // Clear form
    this.refs.username.setValue('');
    this.refs.password.setValue('');
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit} >
        <div>
          <div>
            <TextField
              ref="username"
              hintText="Username"
              floatingLabelText="Enter your Username" />
          </div>
          <div>
            <TextField
              ref="password"
              hintText="Password"
              floatingLabelText="Enter your password"
              type="password" />
          </div>
          <div>
            <RaisedButton label="Submit" primary={true} onTouchTap={this.handleSubmit} />
          </div>
        </div>
      </form>
    );
  }
}
