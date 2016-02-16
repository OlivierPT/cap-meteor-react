import React from 'react';
// load Layout and Welcome React components
//import {Channel} from './channel.jsx';

const ChannelsList = ({channels}) => (
  <div>
    This is the post list
    <ul>
      {channels.map(({channel}) => (
        <li key={channel._id}>
          {channel.label}
        </li>
      ))}
    </ul>
  </div>
);

export default ChannelsList;
