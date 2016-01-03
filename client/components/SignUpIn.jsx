var {
    Styles,
    RaisedButton,
    IconButton,
    Tabs,
    Tab,
    Slider,
    Card,
    CardTitle,
    TextField
    } = MUI;

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

SignUpIn = React.createClass({


    render() {
      return (
        <Card>
            <CardTitle title="Title" subtitle="Subtitle"/>
          <Tabs>
            <Tab label="Sign-In" >
              <SignInForm />
            </Tab>
            <Tab label="Sign-Up" >
              <SignUpForm />
            </Tab>
          </Tabs>
        </Card>
      );
    }
  });
