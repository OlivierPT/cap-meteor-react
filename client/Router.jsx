FlowRouter.route("/", {
  action() {
    FlowRouter.go("/channels");
  }
});

FlowRouter.route("/channels", {
  // calls just before the action
  triggersEnter: [checkUserConnected],
  action() {
    ReactLayout.render(MainLayout, {content: <App/>});
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
    ReactLayout.render(MinimalLayout, {content: <SignUpIn/>});
  }
});

function checkUserConnected(context) {
  if (!Meteor.userId()) {
    FlowRouter.go("/signupin");
  }
}
