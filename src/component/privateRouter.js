import React, { Component } from 'react';

import {Route} from "react-router-dom"

import {inject, observer} from "mobx-react"

import loadable from "@loadable/component"

@inject("user")

@observer
class privateRouter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            routerList:[]
         }
    }

    bindRouter(list){
        let routerList=list.map((item)=>{
            if(item.menuChilds.length===0){
                return <Route path={item.menuUrl} key={item.menuId} component={loadable(()=>import(`./${item.componentPath}`))}></Route>
            }else{
                let ComponentName=loadable(()=>import(`./${item.ComponentPath}`))
                return <ComponentName {...this.props}>
                    {this.bindRouter(item.menuChilds)}
                </ComponentName>
            }
        })
        return routerList


    }

    UNSAFE_componentWillMount(){
        let menuList=this.bindRouter(this.props.user.user.menuInfo)
        
        this.setState({
            routerList:menuList
        })

    }
    render() { 
        return ( 
            <div>

            </div>
         );
    }
}
 
export default privateRouter;