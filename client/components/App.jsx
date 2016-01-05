injectTapEventPlugin();

var {
    Card,
    CardTitle,
    CardText
    } = MUI;



App = React.createClass({

    render: function () {

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
