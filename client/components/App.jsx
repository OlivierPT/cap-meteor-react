var {
    Card,
    CardTitle,
    CardText,
    Paper,
    Input,
    RaisedButton
    } = MUI;



App = React.createClass({

    render: () => {
      return (
        <Card>
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
