var {
    Styles,
    RaisedButton,
    TextField
    } = MUI;


SignUpForm = React.createClass({

  handleSubmit(event) {
    event.preventDefault();


    // Find the text field via the React ref
    var credentials = {};
    credentials.username = this.refs.username.getValue().trim();
    credentials.password = this.refs.password.getValue().trim();
    credentials.email = this.refs.email.getValue().trim();

    Accounts.createUser(credentials, function(error, result){
      if (error) {
        this.error = 'Registration error - ' + error;
        console.log('Registration error - ' + error);
      } else {
        FlowRouter.go('/');
      }
    })

    // Clear form
    this.refs.username.setValue('');
    this.refs.password.setValue('');
    this.refs.password2.setValue('');
    this.refs.email.setValue('');
  },

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
                  ref="email"
                  hintText="Email"
                  floatingLabelText="Enter your Email" />
              </div>
              <div>
                <TextField
                  ref="password"
                  hintText="Password"
                  floatingLabelText="Enter your password"
                  type="password" />
              </div>
              <div>
                <TextField
                  ref="password2"
                  hintText="Password"
                  floatingLabelText="Confirm your password"
                  type="password" />
              </div>
              <div>
                <RaisedButton label="Submit" primary={true}  onTouchTap={this.handleSubmit} />
              </div>
            </div>
        </form>
      );
    }
  });
