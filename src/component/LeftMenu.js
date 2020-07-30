import React, { Component } from 'react';

//antd UI框架
import {Menu} from 'antd'
import { UserOutlined} from '@ant-design/icons';

import{inject,observer} from 'mobx-react'

import {Link} from "react-router-dom"

const { SubMenu } = Menu;

@inject("user")
@observer
class leftMenu extends Component {

  constructor(){
    super();
    this.state={

      leftMenu:[]
    
    }
  }
  //获取数据，动态生成左边栏菜单
  bindMenu(menulist){
      console.log(this.props.user.user.menuInfo[0]);
      let Menulist=menulist.map((item,index)=>{
        if(item.menuChilds.length===0){
          //没有子菜单
          return  <Menu.Item key={item.menuId} icon={<UserOutlined />}>
              <Link to={item.menuUrl}>{item.menuName}</Link> 
          </Menu.Item>
        }else{
          //有子菜单
          return <SubMenu key={item.menuId} icon={<UserOutlined />} title={item.menuName}>
             {this.bindMenu(item.menuChilds)}
        </SubMenu>
        }
      })
      return Menulist;


  }


  UNSAFE_componentWillMount(){

    // let menulist=this.props.user.user.menuInfo
    
    let menulist=this.bindMenu(this.props.user.user.menuInfo)
    this.setState({
      leftMenu:menulist
    })

  }



    render() { 
        return ( 
            <div>
                 <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          {this.state.leftMenu}
        </Menu>
            </div>
         );
    }
}
 
export default leftMenu;