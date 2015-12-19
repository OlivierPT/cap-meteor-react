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

  renderChannels() {
    // Get Channels from this.data.channels
    return this.data.channels.map((channel) => {
      return <Channel
        key={channel._id}
        channel={channel} />;
    });
  },

  render() {
    return (
        <LeftNav ref="leftNavChildren" docked={true}>
          <MenuItem index={0}>Channel List ({this.data.channelsCount})</MenuItem>
          {this.renderChannels()}
        </LeftNav>
    );
  }
});
