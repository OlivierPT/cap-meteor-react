var {
    IconMenu,
    IconButton,
    MoreVertIcon,
    MenuItem,
    FontIcon
    } = MUI;

const iconStyles = {
  marginRight: 24,
};

UserMenu = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Channels collection and puts them on this.data.tasks
  getMeteorData() {

    return {
      currentUser: Meteor.user()
    };
  },

  render: function () {
    return (
      <div>
        {this.data.currentUser.username}
        <FontIcon className="material-icons" style={iconStyles}>home</FontIcon>
      </div>
    );
  }
});
