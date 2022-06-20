import produce from 'immer';
import { SET_EMPLOYEE} from './constants';
import { v4 as uuidv4 } from 'uuid';

export const initialState = {
  EmployeeCardList: [],
  EmployeeCardListreplica: [],

};

/* eslint-disable default-case, no-param-reassign */
const empReducer = (state = initialState, action) =>
  produce(state, draft => {
    const { type } = action;
    //console.log('in orgchart reducer ==',action.type,action.payload.Users.map)
    switch (action.type) {
      case SET_EMPLOYEE:
        // if(action.payload.fromSaga === true){
        //   console.log('in side if ==',action.payload.fromSaga)
        //   return {
        //     ...state,
        //     EmployeeCardList: action.payload.users,
        //     EmployeeCardListreplica: action.payload.users
        //   };
        // } else{
          // console.log('in side else ==',action.payload.fromSaga)
          return {
            ...state,
            EmployeeCardList: action.payload.users,
          };
        // }
       

      default:
        return state;
    }
  });

export default empReducer;
