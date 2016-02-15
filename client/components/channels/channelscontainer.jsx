import {composeWithTracker} from 'react-komposer';
import ChannelsList from './channelslist.jsx';

function composer(props, onData) {
  const handle = Meteor.subscribe('channels');
  if(handle.ready()) {
    const channels = Channels.find({}).fetch();
    onData(null, {channels});
  };
};

export default composeWithTracker(composer)(ChannelsList);
