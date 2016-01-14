var {
    MenuItem,
    ArrowDropRight
    } = MUI;

// Channel component
Channel = React.createClass({
  propTypes: {
    channel: React.PropTypes.object.isRequired,
  },

  handleChannelSelect: function(event, item) {
    FlowRouter.go("/channels/"+this.props.channel._id);
  },

  render() {
    return (
          <MenuItem key={this.props.channel._id} primaryText={this.props.channel.label}
            onTouchTap={this.handleChannelSelect}/>
    );
  }
});
