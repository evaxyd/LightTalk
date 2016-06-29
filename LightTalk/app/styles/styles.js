
'use strict';

var React = require('react');
var ReactNative = require('react-native');

var { StyleSheet } = ReactNative;

var styles = StyleSheet.create({
  container: {
    position:'relative',
    flex: 1,
    backgroundColor: '#fff'
  },
  context:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  header: {
    height: 50,
    backgroundColor: '#1e95e5',
    paddingTop: 28,
    alignItems: 'center'
  },
  headerText:{
    color: '#fff',
    fontSize: 16
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  separator: {
    height: 4,
    backgroundColor: '#f6f6f6',
  },
  separatorline:{
    marginTop:10,
    width: 1,
    backgroundColor: '#ccc',
  },
  thumb: {
    height: 120,
    marginLeft:5,
    marginRight:5,
    flexDirection: 'row',
  },
  text: {
    flex: 1,
    fontSize: 12,
    paddingBottom:10,
  },
  userImg:{
    width:30,
    height:30,
    borderRadius:15,
  },
  userText:{
    lineHeight:20,
    flex: 1,
    color:'#999',
    fontSize:11,
    paddingLeft:10
  },
  footText:{
    lineHeight:20,
    flex: 1,
    color:'#999',
    fontSize:12,
  },
  coverbg:{
    flex: 1,
    backgroundColor:'#000',
  },
  cell:{
    flex: 1,
  },
  right:{
    textAlign:'right'
  },
  center:{
    textAlign:'center'
  }
});

module.exports = styles;