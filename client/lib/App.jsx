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

var App = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
        };
    },

    render: function () {

      return (
            <AppCanvas>
              <AppBar
                title={<span>Cap Meteor</span>}
                iconElementRight={<FlatButton label="Save" />} />

              <ChannelsList></ChannelsList>

                <div style={{padding: '80px',}}>

                    <RaisedButton primary={true} label="Tap"/>
                    <RaisedButton secondary={true} label="Tap" labelPosition="after">
                      <FontIcon className="muidocs-icon-custom-github" />
                    </RaisedButton>
                    <br/>
                    <DatePicker hintText="Portrait Dialog"/>
                    <br/>
                    <DatePicker
                        hintText="Landscape Dialog"
                        mode="landscape"/>
                </div>
            </AppCanvas>
        );
    }
});

Meteor.startup(() => {
    ReactDOM.render(<App/>, document.getElementById('react-root'));
});
