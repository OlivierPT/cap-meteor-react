injectTapEventPlugin();

var {
    AppCanvas,
    AppBar,
    Styles,
    RaisedButton,
    DatePicker,
    MenuItem,
    IconButton,
    NavigationClose,
    IconMenu,
    FontIcon,
    FlatButton,
    LeftNav
    } = MUI;

var { ThemeManager, LightRawTheme } = Styles;

MainLayout = React.createClass({
  childContextTypes: {
      muiTheme: React.PropTypes.object
  },

  getChildContext() {
      return {
          muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
      };
  },

  render() {
    return (
      <AppCanvas>
        <AppBar
          title={<span>Cap Meteor React</span>}
          iconElementRight={<FlatButton label="Save" />} />

          <div>
            <ChannelsList></ChannelsList>
          </div>

          <div style={{padding: '80px',}}>
              <main>{this.props.content}</main>
          </div>
      </AppCanvas>

    );
  }
});
