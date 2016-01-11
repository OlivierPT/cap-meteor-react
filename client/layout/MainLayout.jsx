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

  _onMenuIconButtonTouchTap: function () {
      this.refs.leftNav.toggle();
    },

  render() {
    return (
      <AppCanvas predefinedLayout={1}>

          <AppBar
            className="mui-dark-theme"
            title={<span>Cap Meteor React</span>}
            onMenuIconButtonTouchTap={this._onMenuIconButtonTouchTap}
            zDepth={0}>
            <div className="action-icons">
              <IconButton icon="navigation-more-vert" />
              <IconButton icon="action-favorite-outline" />
              <IconButton icon="action-search" />
            </div>
          </AppBar>

          <ChannelsList ref='leftNav'/>

          <div className='mui-app-content-canvas'>
            {this.props.content}
          </div>

        </AppCanvas>

    );
  }
});
