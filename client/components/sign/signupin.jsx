import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardText from 'material-ui/lib/card/card-text';
import CardTitle from 'material-ui/lib/card/card-title';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
// load Layout and Welcome React components
import {SignInForm} from './signinform.jsx';
import {SignUpForm} from './signupform.jsx';


const SignUpIn = () => (
    <Card>
        <CardTitle title="Title" subtitle="Subtitle"/>
      <Tabs>
        <Tab label="Sign-In" >
          <SignInForm />
        </Tab>
        <Tab label="Sign-Up" >
          <SignUpForm />
        </Tab>
      </Tabs>
    </Card>
);
