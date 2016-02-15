import React from 'react';
import {mount} from 'react-mounter';
// load Layout and Welcome React components
import {MainLayout} from './layout/mainlayout.jsx';
import {AnonLayout} from './layout/anonlayout.jsx';
import {Home} from './components/home.jsx';
import {SignUpIn} from './components/signupin.jsx';

FlowRouter.route("/", {
  action() {
    FlowRouter.go("/channels");
  }
});

FlowRouter.route("/channels", {
  // calls just before the action
  triggersEnter: [checkUserConnected],
  action() {
    ReactLayout.render(MainLayout, {content: <Home/>});
  }
});

FlowRouter.route("/channels/:channelId", {
  // calls just before the action
  triggersEnter: [checkUserConnected],
  action(params, queryParams) {
    console.log("Yeah! We are on the channel:", params.channelId);
    ReactLayout.render(MainLayout, {content: <Room channelId={params.channelId}/>});
  }
});

FlowRouter.route("/signupin", {
  action() {
    ReactLayout.render(AnonLayout, {content: <SignUpIn/>});
  }
});

function checkUserConnected(context) {
  if (!Meteor.userId()) {
    FlowRouter.go("/signupin");
  }
}
