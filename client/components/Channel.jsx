var {
    MenuItem,
    ArrowDropRight
    } = MUI;

// Channel component
Channel = React.createClass({
  propTypes: {
    channel: React.PropTypes.object.isRequired,
  },

  render() {
    return (
        <MenuItem primaryText="{this.props.channel.label}" rightIcon={<ArrowDropRight />} />
    );
  }
});
