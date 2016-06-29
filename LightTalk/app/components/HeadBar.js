'use strict';
 
var React = require('react');
var ReactNative = require('react-native');
var styles = require('../styles/styles');
 
var TabBar = require('./TabBar');
var {
  StyleSheet,
  Text,
  View,
  StatusBar,
  
  } = ReactNative;

var HeadBar = React.createClass({
  getInitialState:function() {
    return {
    }
  },
  render: function() {
    return (
      <View style={ styles.container }>
        <StatusBar
          barStyle="light-content"
        />
        <View style={ styles.header }>
          <Text style={ styles.headerText }>Light Talk</Text>
        </View>
        <TabBar/>
      </View>
    );
  }
});

 
module.exports = HeadBar;