var {
    Styles,
    Menu,
    MenuItem,
    IconButton,
    IconMenu,
    FontIcon,
    ArrowDropRight,
    TextField
    } = MUI;

Meteor.subscribe("channels");

// ChannelsList component
ChannelsList = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Channels collection and puts them on this.data.tasks
  getMeteorData() {
    Meteor.subscribe('channels');

    return {
      channels: Channels.find().fetch(),
      channelsCount: Channels.find().count()
    };
  },

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    var label = this.refs.newChannel.getValue().trim();

    Meteor.call("addChannel", label, function(error, result) {
      if (error) {
        console.log('Channel creation error - ', error);
      }
    });

    // Clear form
    this.refs.newChannel.setValue("");
  },

  renderChannels() {
    // Get Channels from this.data.channels
    return this.data.channels.map((channel) => {
      return <MenuItem key={channel._id} primaryText={channel.label} rightIcon={<ArrowDropRight />} />;
    });
  },

  render() {
    return (
      <div>
        <div>Channel List ({this.data.channelsCount})</div>

        <Menu>
        { this.data.channels.map(channel =>
          <MenuItem key={channel._id} primaryText={channel.label} />
        )}
      </Menu>

        <form onSubmit={this.handleSubmit} >
          <TextField
            ref="newChannel"
            hintText="Channel label"
            floatingLabelText="Create a Channel" />
          <IconButton iconClassName="muidocs-icon-custom-github" tooltip="GitHub"/>
        </form>
      </div>
    );
  }
});
