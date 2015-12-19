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

// Channel component
Channel = React.createClass({
  propTypes: {
    channel: React.PropTypes.object.isRequired,
  },

  render() {
    return (
        <MenuItem index={1}><a href="/{this.props.key}">{this.props.channel.label}</a></MenuItem>
    );
  }
});
