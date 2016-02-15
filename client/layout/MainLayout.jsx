import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';


MainLayout = React.createClass({
  childContextTypes: {
      muiTheme: React.PropTypes.object
  },


  render: function () {
    return (
      <div>
          <AppBar
            title={<span>Cap Meteor React</span>}
            onLeftIconButtonTouchTap={this._onMenuIconButtonTouchTap}
            zDepth={0}>
          </AppBar>

          <main className="main">
            {this.props.content}
          </main>
      </div>
    );
  }
});
