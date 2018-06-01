import { GET_USER_INFO } from '../services/UserCenterService';

export default {
  namespace: 'userCenter',
  state: {
    userInfo:{}
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    }
  },
  effects: {
    *GET_USER_INFO({ payload }, { call, put }) {
      //请求数据接口
     // const response=yield call(GET_USER_INFO,payload);
      //存储数据
      yield put({
        type: 'save',
        payload: {
          userInfo:{
            name:'码农'
          }
        }
      });
    },
  },
}