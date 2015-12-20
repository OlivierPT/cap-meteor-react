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

App = React.createClass({
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
                title={<span>Cap Meteor (React version)</span>}
                iconElementRight={<FlatButton label="Save" />} />

              <ChannelsList></ChannelsList>

              <div style={{padding: '80px',}}>

                    <Room></Room>
                </div>
            </AppCanvas>
        );
    }
});

// Meteor.startup(() => {
//     ReactDOM.render(<App/>, document.getElementById('react-root'));
// });
