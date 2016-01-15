var {
    Styles,
    RaisedButton,
    IconButton,
    Card,
    CardTitle,
    CardText,
    CardActions,
    FlatButton,
    TextField
    } = MUI;

// Room component
Room = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  propTypes: {
    channelId: React.PropTypes.string.isRequired
  },

  // Loads items from the Channels collection and puts them on this.data.tasks
  getMeteorData() {
    Meteor.subscribe('messages', this.props.channelId);

    return {
      messages: Messages.find().fetch(),
      messagesCount: Messages.find().count(),
      channel: Channels.findOne(this.props.channelId)
    };
  },

  handleSubmit: function(event) {
    event.preventDefault();

    var newMessage = {};
    // Find the text field via the React ref
    newMessage.text = this.refs.newMessage.getValue().trim();

    Meteor.call("sendMessage", newMessage, function(error, result) {
      if (error) {
        console.log('Message sending error - ', error);
      }
    });

    // Clear form
    this.refs.newMessage.setValue("");
  },

  render: function() {
    return (
        <Card>
            <CardTitle title={this.data.channel.label+" "+this.data.messagesCount} subtitle="Messages"/>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions>
              <form onSubmit={this.handleSubmit} ref="mesgForm">
                <TextField
                  ref="newMessage"
                  hintText="Message"
                  floatingLabelText="Send a message" />
                <FlatButton label="Send" onTouchTap={this.handleSubmit}/>
              </form>

            </CardActions>
        </Card>
    );
  }
});
