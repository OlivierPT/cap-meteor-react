var {
    Styles,
    RaisedButton,
    IconButton,
    Tabs,
    Tab,
    Slider,
    Card,
    CardTitle
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
              <Tab label="Item One" >
                <div>
                  <h2>Tab One Template Example</h2>
                  <p>
                    This is an example of a tab template!
                  </p>
                  <p>
                    You can put any sort of HTML or react component in here. It even keeps the component state!
                  </p>
                  <Slider name="slider0" defaultValue={0.5} />
                </div>
              </Tab>
              <Tab label="Item Two" >
                <div>
                  <h2>Tab Two Template Example</h2>
                  <p>
                    This is another example of a tab template!
                  </p>
                </div>
              </Tab>
            </Tabs>
          </Card>
        );
      }
    });
