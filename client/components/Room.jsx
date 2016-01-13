var {
    Styles,
    RaisedButton,
    IconButton,
    Card,
    CardTitle,
    CardText
    } = MUI;

// Room component
Room = React.createClass({
  propTypes: {
    channel: React.PropTypes.object.isRequired,
  },

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Channels collection and puts them on this.data.tasks
  getMeteorData: () => {
    Meteor.subscribe('messages', this.params.channelId);

    return {
      messages: Messages.find().fetch()
    };
  },

  render() {
    return (
        <Card>
            <CardTitle title="Title" subtitle="Subtitle"/>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
        </Card>
    );
  }
});
