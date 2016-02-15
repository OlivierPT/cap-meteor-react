import React from 'react';

AnonLayout = React.createClass({
  render() {
    return (
      <div>
        <main>{this.props.content}</main>
      </div>
    );
  }
});
