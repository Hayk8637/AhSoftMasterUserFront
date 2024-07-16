import './style.css';
import React from 'react';

import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { PartitionOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem(<Link to="/admin/masterUser">MasterUser</Link>, 'sub2', <PartitionOutlined />),
  getItem(<Link to="/admin/partners">Partners</Link>, 'sub1', <PartitionOutlined />),
  
  // getItem('Navigation One', 'sub2', <MailOutlined />, [
  //   getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
  //   getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  // ]),
  // getItem('Navigation Two', 'sub3', <AppstoreOutlined />, [
  //   getItem('Option 5', '5'),
  //   getItem('Option 6', '6'),
  //   getItem('Submenu', 'sub4', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  // ]),

  // { type: 'divider' },

  // getItem('Settings', 'sub5', <SettingOutlined />, [
  //   getItem(<Link to="/admin/accountSettings"> Account Settings</Link>, '10'),
  // ])
];  


const LeftNavigation: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };
    return<>
      <div className='logoShow'  >
        <Menu
          className='menu'
          onClick={onClick}
          defaultSelectedKeys={['0']}
          defaultOpenKeys={['1']}
          mode="inline"
          items={items}
        />
      </div>
    </>
}
export default LeftNavigation