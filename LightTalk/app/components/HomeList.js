/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

var React = require('react');
var ReactNative = require('react-native');
var styles = require('../styles/styles');
var homedata = require('../json/homelist');

var TabBar = require('./TabBar');
var fullscreen = require('./FullScreen');

var {
  AppRegistry,
  Component,
  Text,
  Image,
  TouchableHighlight,
  RecyclerViewBackedScrollView,
  View,
  ListView,
  Navigator
  } = ReactNative;

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

var HomeList = React.createClass({
  componentWillMount: function() {
    fetch('http://localhost:8081/app/json/homelist.json')
      .then(res => res.json())
      .then((res) => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(res.list),
                loaded: true,
            });
      })
  },
  getInitialState:function() {
    return {
      dataSource: ds.cloneWithRows(this._genRows({})),
    }
  },

  _pressData: ({}: {[key: number]: boolean}),
  onPress:function(){
  },


  ScaleImg:function(data){
    console.log(data)
    var navigator  = this.props.navigator;
        if(navigator) {
            navigator.push({
                title: 'Fullscreen',
                component: fullscreen,
                params: { 
                  url:data
                }
            })
        }
  },
  
  _genRows: function(pressData: {[key: number]: boolean}): Array<string> {
    //console.log(pressData);
    var dataBlob = [];
    for (var ii = 0; ii < 5; ii++) {
      var pressedText = pressData[ii] ? ' (pressed)' : '';
      dataBlob.push( ii + '、' + pressedText);
    }
    return dataBlob;
  },

  _renderRow: function(data,rowData, sectionID, rowID) {
    var html=[];
    if(typeof(data.image) === 'object'){
      for(var v of data.image){
        html.push(<View key={v} style={styles.cell}><TouchableHighlight onPress={()=>this.ScaleImg(v)}><Image style={styles.thumb} source={{uri: v}} /></TouchableHighlight></View>);
      }
    }else{
      html.push(<View key={v} style={styles.cell}><TouchableHighlight onPress={()=>this.ScaleImg(data.image)}><Image style={styles.thumb} source={{uri: data.image}} /></TouchableHighlight></View>)
    }
    return (
      <TouchableHighlight style={{flex:1}}>
        <View>
          <View style={styles.column}>
            <View style={styles.row}>
              <Image style={styles.userImg} source={{uri: data.userImg}} />
              <Text style={styles.userText}>
                {data.username}
              </Text>
              <Text style={[styles.userText,styles.right]}>
                {data.time}
              </Text>
            </View>
            <Text style={styles.text}>
              {data.text}
            </Text>
            <View style={{flexDirection: 'row'}}>
              {html}
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.cell}>
                <View>
                  <Text style={[styles.center,styles.footText]}>点赞</Text>
                </View>
              </View>
              <View style={styles.separatorline} />
              <View style={styles.cell}>
                <View>
                  <Text style={[styles.center,styles.footText]}>评论</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  },

  render:function () 
    {
    return (
        <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
            renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
            renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
        >
        </ListView>
    );
  },

  
});

module.exports = HomeList;
