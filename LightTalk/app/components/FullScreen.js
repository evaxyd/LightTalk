/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

var React = require('react');
var ReactNative = require('react-native');
var styles = require('../styles/styles');
var {
  AppRegistry,
  Component,
  Text,
  View,
  Navigator,
  Image,
  Dimensions,
  TouchableOpacity
  } = ReactNative;


var FullScreen = React.createClass({
  _pressButton:function() {
        var navigator = this.props.navigator;
        if(navigator) {
            navigator.pop();
        }
        
    },
  componentDidMount:function(){
    var viewheight = Dimensions.get('window').height;
    var viewwidth = Dimensions.get('window').width;
    var styles = {height:viewheight}
    return styles;
  },
  render:function () 
    {
      var url = this.props.url;
      var marginTop = (Dimensions.get('window').height-240)/2;
    return (
      <View style={[styles.coverbg,this.componentDidMount()]}>
        <TouchableOpacity onPress={this._pressButton}>
          <Image style={[styles.thumb,{marginTop:marginTop,resizeMode:'cover'}]} source={{uri: url}} />
        </TouchableOpacity>
      </View>
    );
  }
});


module.exports = FullScreen;
