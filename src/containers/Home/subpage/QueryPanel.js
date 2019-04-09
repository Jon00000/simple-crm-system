import React, { Component } from 'react';
import Form from "../../../components/Form";
import { getCustomersFetch } from "../../../fetch/crud"


class QueryPanel extends Component {
    _concatElements(obj){
        let queryStr = "?";
        for (let key in obj) {  
            if (key === 'status'){
                if (obj[key]=== 'All') delete obj[key] 
            } 
            if(obj[key]){
                if(key==='name'||key==='id'){
                    queryStr=`${queryStr}${key}_like=${obj[key]}&` ;   
                } else {
                    queryStr=`${queryStr}${key}=${obj[key]}&` ;
                }
            }        
                 
        }
        queryStr=queryStr.substring(0,queryStr.length-1);
        return queryStr;
    }
    handleSubmit(values){
        let qstr = this._concatElements(values);
        const result = getCustomersFetch(qstr);
        result.then(res=> {
            return res.json();
        }).then(json => {
            // 这里把查到的数据传到上一级，以便showPanel可以使用
            this.props.onHandleResults(json)
        }).catch(ex => {
            console.log('get users error')
        })
    }
    componentDidMount(){
        const values = {status:'All'}
        this.handleSubmit(values)
    }
    render(){
        return(
            <Form onHandleSubmit={this.handleSubmit.bind(this)}></Form>
        )
    }
}

export default QueryPanel;
