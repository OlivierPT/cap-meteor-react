injectTapEventPlugin();

var {
    AppCanvas,
    AppBar,
    Styles,
    IconButton,
    IconMenu,
    FontIcon
    } = MUI;

var { ThemeManager, LightRawTheme } = Styles;

MainLayout = React.createClass({
  childContextTypes: {
      muiTheme: React.PropTypes.object
  },

  getChildContext: function () {
      return {
          muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
      };
  },

  _onMenuIconButtonTouchTap: function () {
      this.refs.leftNav.toggle();
    },

  render: function () {
    return (
      <AppCanvas predefinedLayout={1}>

          <AppBar
            title={<span>Cap Meteor React</span>}
            onLeftIconButtonTouchTap={this._onMenuIconButtonTouchTap}
            zDepth={0}
            iconElementRight={<UserMenu />}>
          </AppBar>

          <ChannelsList ref='leftNav'/>

          <main className="main">
            {this.props.content}
          </main>

        </AppCanvas>

    );
  }
});
