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

  channelId: () => {
    return this.props.channelId;
  },

  // Loads items from the Channels collection and puts them on this.data.tasks
  getMeteorData: () => {
    Meteor.subscribe('messages', this.channelId);

    return {
      messages: Messages.find().fetch(),
      nbMessages: Messages.find().count()
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

  render() {
    return (
        <Card>
            <CardTitle title={this.props.channelId+" "+this.data.nbMessages} subtitle="Messages"/>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions>
              <form onSubmit={this.handleSubmit} >
                <TextField
                  ref="newMessage"
                  hintText="Message"
                  floatingLabelText="Send a message" />
                <FlatButton label="Send"/>
              </form>

            </CardActions>
        </Card>
    );
  }
});
