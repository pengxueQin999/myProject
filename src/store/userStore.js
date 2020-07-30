import {observable,action} from 'mobx'

// import Axios from 'axios'

import Axios from '../util/axios'

import Api from  '../api/index'

export default class UserStore {
  @observable user=[];
  @observable isLogin=false;
  @observable token="";

  @action
  login=()=>{
    return new Promise((resolve,reject)=>{
      Axios.post(Api.user.userLogin,{userName:'admin',userPwd:123})
      .then((res)=>{
        console.log(res);

        if(res.data.returnCode===200){
          //用户和用户菜单信息
          this.user=res.data.data;
          
          //令牌
          this.token=res.data.token;

          resolve("登录成功")
        }else{
          reject("登录失败")
        }
        
      })
    })
  }
}