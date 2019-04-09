
import React from 'react';
import { Layout, Menu } from 'antd';
import QueryPanel from './subpage/QueryPanel';
import ShowPanel from './subpage/ShowPanel';
import './HomeLayout.css';

const { Header, Content, Sider } = Layout;

class HomeLayout extends React.Component {
    constructor(){
        super();
        this.state = {
            lists:[]
        }
    }
    handleResults(results){
        this.setState({
            lists: results
        })
    }
    render() {
        return (
            <div>
                <Layout>
                    <Header className="header">
                        <div className="logo">
                            <span style={{ color: "#fff", fontSize: 22, fontWeight: "bold", float:'left'}}>Simple CRM System</span>
                        </div>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <Layout style={{ padding: '24px 0', background: '#fff' }}>
                            <Sider width={200} style={{ background: '#fff' }}>
                                <Menu theme="light" defaultSelectedKeys={['1']}>
                                    <Menu.Item key="1">
                                        <div>CustomInfo</div>
                                    </Menu.Item>
                                    <Menu.Item key="2">
                                        <div>Other Menus</div>
                                    </Menu.Item>
                                </Menu>
                            </Sider>
                            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                <QueryPanel onHandleResults={this.handleResults.bind(this)}/>
                                <ShowPanel lists={this.state.lists} onHandleResults={this.handleResults.bind(this)}/>
                            </Content>
                        </Layout>
                    </Content>

                </Layout>
            </div>
        )
    }
}

export default HomeLayout;