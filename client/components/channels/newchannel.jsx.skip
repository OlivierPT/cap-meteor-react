import React from 'react';

class NewChannel extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <form onSubmit={this.createChannel.bind(this)} >
        <TextField
          ref="newChanLabel"
          hintText="Channel label"
          floatingLabelText="Create a Channel" />
        <IconButton iconClassName="muidocs-icon-custom-github" tooltip="GitHub"/>
      </form>
    );
  }

  createChannel() {

    const newChannel = {};
    // Find the text field via the React ref
    newChannel.label = this.refs.newChanLabel.getValue().trim();

    Meteor.call("addChannel", newChannel, function(error, result) {
      if (error) {
        console.log('Channel creation error - ', error);
      }
    });

    // Clear form
    this.refs.newChanLabel.setValue("");
  }
}

export default NewChannel;
