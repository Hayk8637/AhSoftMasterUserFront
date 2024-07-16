import ContentM from '../../components/Content/Content';
import LeftNavigation from '../../components/Main/LeftNavigation/LeftNavigtion';
import HeaderM from '../../components/Main/Header/Header';
import { Button, Layout, theme } from 'antd';
import './style.css'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useState } from 'react';
const { Header, Content,  Sider } = Layout;



const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

return<>
    <Layout style={{height: "100vh"}}>
    <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />  
        <LeftNavigation />
    </Sider>
        <Layout style={{height:'100vh', paddingTop: 7,marginLeft:5}}>
        <Header style={{ padding: 0, background: "none" , margin: 0}}  >
        <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              display: 'inline'
            }}/>
            <HeaderM  />
        </Header>

        <Content
          style={{
            padding: 5,
            minHeight: 280,
            height: '100%',
            background: colorBgContainer,
            borderRadius: 10 }}>         
              <ContentM/>
        </Content>
        </Layout>
    </Layout>
</>
}
export default Admin;

