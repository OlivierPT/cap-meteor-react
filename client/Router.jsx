FlowRouter.route('/', {
  action() {
    ReactLayout.render(MainLayout, {content: <App/>});
  }
});

FlowRouter.route('/signupin', {
  action() {
    ReactLayout.render(MinimalLayout, {content: <SignUpIn/>});
  }
});
