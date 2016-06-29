/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

var React = require('react');
var ReactNative = require('react-native');
var styles = require('../styles/styles');
var HomeList = require('./HomeList');

var {
  AppRegistry,
  TabBarIOS,
  Component,
  Text,
  View,
  Navigator
  } = ReactNative;


var TabBar = React.createClass({
  getInitialState:function() {
    return {
      selectedTab: 'Home'
    }
  },
  changeTab:function(tabName){
      this.setState({
        selectedTab: tabName
      });
  },
  _renderContent: function(color: string, pageText: string) {
    return (
      <View style={[styles.context, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
      </View>
    );
  },
  render:function () 
    {
    return (
        <TabBarIOS>
          <TabBarIOS.Item
              title="Home"
              selected={this.state.selectedTab === 'Home'}
              onPress={ () => this.changeTab('Home') }
              >
              <Navigator
                initialRoute={{ name: 'HomeList', component: HomeList }}
                renderScene={(route, navigator) => {
                  let Component = route.component;
                  return <Component {...route.params} navigator={navigator} />
                }} />
          </TabBarIOS.Item>
          <TabBarIOS.Item
              title="Chat"
              selected={this.state.selectedTab === 'Chat'}
              onPress={ () => this.changeTab('Chat') }
              >
              {this._renderContent('#f0f0f0', 'Chat')}
          </TabBarIOS.Item>
          <TabBarIOS.Item
              title="Mine"
              selected={this.state.selectedTab === 'Mine'}
              onPress={ () => this.changeTab('Mine') }
              >
              {this._renderContent('#f1f1f1', 'Mine')}
          </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
});


module.exports = TabBar;
