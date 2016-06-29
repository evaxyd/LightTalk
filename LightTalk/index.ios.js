/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

var React = require('react');
var ReactNative = require('react-native');
var styles = require('./app/styles/styles');
var HeadBar = require('./app/components/HeadBar');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View
} = ReactNative;

var LightTalk = React.createClass({
  render:function () 
    {
    return (
        <HeadBar />
    );
  }
});


AppRegistry.registerComponent('LightTalk', () => LightTalk);
