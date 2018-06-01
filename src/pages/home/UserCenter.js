import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from '../../utils/dva';
import { scaleSize } from '../../utils/ScreenUtil';

class UserCenter extends Component {
  static navigationOptions={
    title: '用户中心',
  }
  
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>{this.props.userName}</Text>
      </View>
    );
  }
  componentDidMount(){

    const { dispatch ,navigation } = this.props;
    dispatch({
      type:'userCenter/GET_USER_INFO',
      payload:{
        id:navigation.state.params.name
      }
    })
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function mapStateToProps(state) {
  return {
    userName: state.userCenter.userInfo.name, // state 映射到 props
  };
}

export default connect(mapStateToProps)(UserCenter);

