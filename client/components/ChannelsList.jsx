var {
  Styles,
  Menu,
  MenuItem,
  IconButton,
  IconMenu,
  FontIcon,
  ArrowDropRight,
  TextField,
  LeftNav,
  AppBar
} = MUI;

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

  handleSubmit: function(event) {
    event.preventDefault();

    var newChannel = {};
    // Find the text field via the React ref
    newChannel.label = this.refs.newChanLabel.getValue().trim();

    Meteor.call("addChannel", newChannel, function(error, result) {
      if (error) {
        console.log('Channel creation error - ', error);
      }
    });

    // Clear form
    this.refs.newChanLabel.setValue("");
  },

  handleToggle: function() {
    this.setState({open: !this.state.open});
  },

  handleChannelSelect: function(event, item) {
    FlowRouter.go("/channels/");
  },

  render() {
    return (
      <LeftNav
        ref="leftNav"
        docked={false}
        open={this.state.open}
        onClick={this.handleToggle}>

        <AppBar title="Channel List ({{this.data.channelsCount}})"/>

        { this.data.channels.map(channel =>
          <Channel key={channel._id} channel={channel} />
        )}

        <form onSubmit={this.handleSubmit} >
          <TextField
            ref="newChanLabel"
            hintText="Channel label"
            floatingLabelText="Create a Channel" />
          <IconButton iconClassName="muidocs-icon-custom-github" tooltip="GitHub"/>
        </form>

      </LeftNav>
    );
  }
});
