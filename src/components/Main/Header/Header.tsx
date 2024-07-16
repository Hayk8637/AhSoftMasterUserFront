import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import './style.css'
import {  Dropdown, MenuProps, Space } from 'antd';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../store';
import { logoutUser } from '../../../store/auth/actionCreators';

const Header: React.FC =() => {
  const dispatch = useAppDispatch();

  const items: MenuProps['items'] = [
    {
      label: (
        <a  rel="noopener noreferrer" href="/admin/accountSettings">
          Settings
        </a>
      ),
      key: '1',
    },
    {
      label: <a href='/' style={{color: 'red'}} onClick={()=>{dispatch(logoutUser())}}><LogoutOutlined /> LogOut</a>,
      key: '2',
    },
  ];

    return<>
      <div className="adminHeader">
        <div className='userName'>
          <span>
            <Dropdown menu={{ items }} trigger={['click']} placement='bottomLeft'>
              <Link to="#" onClick={(e) => e.preventDefault()}>
                <Space> user name <UserOutlined /> </Space>
              </Link>
            </Dropdown> 
          </span>
        </div>
      </div>
    </>
}
export default Header;   