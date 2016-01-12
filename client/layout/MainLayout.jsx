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
            zDepth={0}>
            <div className="action-icons">
              <IconButton icon="navigation-more-vert" />
              <IconButton icon="action-favorite-outline" />
              <IconButton icon="action-search" />
            </div>
          </AppBar>

          <ChannelsList ref='leftNav'/>

          <main className="main">
            {this.props.content}
          </main>

        </AppCanvas>

    );
  }
});
