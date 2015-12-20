var {
    Styles,
    RaisedButton,
    IconButton,
    Card,
    CardTitle,
    CardText
    } = MUI;

// Channel component
Room = React.createClass({
  propTypes: {
    channel: React.PropTypes.object.isRequired,
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
