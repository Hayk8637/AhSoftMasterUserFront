import { Breadcrumb, Button, Modal } from 'antd';
import './style.css'
import Input, { SearchProps } from 'antd/es/input';
import Search from 'antd/es/input/Search';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const ContentTools: React.FC = () => {
  //location props
  const path =  useLocation().pathname;
  const location = path.split('/');
  const breadcrumb = location.slice(3,);
  const breadcrumbTitles = breadcrumb.filter((item, index) => index % 2 === 0);
  const pageName = location[location.length-1];
  //modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  //search
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
    return <>
        {pageName === 'partners' ? null : 
        <Breadcrumb style={{display:'inline-block'}}
              separator="/"
              items={[
                ...breadcrumbTitles.map( (title , index)=> ({
                    href: `${location.slice(0,location.length-(breadcrumbTitles.length-index)*2).join('/')}`,
                    title: `${title}`
                })),
                {
                  title: pageName,
                }]}/>}
          <div className='searchAdd'>
            <Search placeholder="input search text" className='search' onSearch={onSearch} enterButton />
            {true && <Button type='primary'className='add' onClick={() => setIsModalVisible(true)}>Add {pageName}</Button>}
          </div>
      {/* modal */}
      <Modal
        title={`Add ${pageName}`}
        open={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}>
        <Input placeholder="Name" />
        <Input placeholder="Email" />
      </Modal>
    </>
}
export default ContentTools;