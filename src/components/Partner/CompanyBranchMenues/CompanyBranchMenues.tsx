import './style.css'
import ContentTableType2 from '../../ContentTableType2/ContentTableType2';
import { IMenu } from '../../Views/Interface';
import { Button, Checkbox, Input } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import ContentTools from '../../ContentTools/ContentTools';

const CompanyBranchMenues: React.FC=() => {
  const path = useLocation().pathname;
  const location  = path.split('/');
  const length = path.split('/').length;
  
    const [data , setData] =useState<IMenu[]> ([
        {
            key: '1',
            name: 'Menu 1',
            imgUrl: 'image_url_1',
            show: true
        },
        {
            key: '2',
            name: 'Menu 2',
            imgUrl: 'image_url_2',
            show: true
        },
        {
            key: '3',
            name: 'Menu 3',
            imgUrl: 'image_url_3',
            show: true
        },
        {
            key: '4',
            name: 'Menu 4',
            imgUrl: 'image_url_4',
            show: true
        },
        {
            key: '5',
            name: 'Menu 5',
            imgUrl: 'image_url_5',
            show: true
        },
        {
            key: '6',
            name: 'Menu 6',
            imgUrl: 'image_url_6',
            show: true
        },
        {
            key: '7',
            name: 'Menu 7',
            imgUrl: 'image_url_7',
            show: true
        },
        {
            key: '8',
            name: 'Menu 8',
            imgUrl: 'image_url_8',
            show: true
        },
        {
            key: '9',
            name: 'Menu 9',
            imgUrl: 'image_url_9',
            show: true
        },
        {
            key: '10',
            name: 'Menu 10',
            imgUrl: 'image_url_10',
            show: true
        }
    ]);
    const columns: any[] = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          editable: true,
          render: (text: string, record: IMenu) => {
            return isEditing(record) ? (
              <Input defaultValue={record.name} />
            ) : (
              text
            );
          },
        },
        {
          title: 'IMG',
          dataIndex: 'imgUrl',
          key: 'imgUrl',
          editable: true,
          render: (text: string, record: IMenu) => {
            return isEditing(record) ? (
              <Input defaultValue={record.imgUrl} />
            ) : (
              text
            );
          },
        },
        {
          title: 'Show',
          dataIndex: 'show',
          key: 'show',
          editable: true,
          render: (text: boolean, record: IMenu) => {
            return isEditing(record) ? (
              <Checkbox defaultChecked={record.show} />
            ) : (
              String(text)
            );
          },
        },
        {
          title: 'Actions',
          key: 'actions',
          render: (record: IMenu) => {
            const editable = isEditing(record);
            return editable ? (
              <span>
                <Button type="primary" onClick={() => save(record)}>Save</Button>
                <Button onClick={cancel}>Cancel</Button>
              </span>
            ) : (
              <span>
                <Button type="link" ><Link to={`${path}/${location[length-2]}/products`}>Products</Link></Button>
                <Button type="link" onClick={() => edit(record)}>Edit</Button>
                <Button type="link" onClick={() => handleDelete(record)}>Delete</Button>
              </span>
            );
          },
        },
      ];
      //Editing menues
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record: IMenu) => record.key === editingKey;
  const edit = (record: IMenu) => {
    setEditingKey(record.key);
  };
  function cancel() {
    setEditingKey('');
  }
  const save = (record: IMenu) => {
    const newData = [...data];
    const index = newData.findIndex(item => record.key === item.key);
    if (index > -1) {
      const item = newData[index];
      newData.splice(index, 1, { ...item });
      setData(newData);
      setEditingKey('');
    }
  };
  const handleDelete = (record: IMenu) => {
    setData(prevData => prevData.filter(item => item.key !== record.key));
  };
  const saveOrder = (updatedData: IMenu[]) => {
    setData(updatedData);
  };
    
    return<>
        <div className='menues'>
            <ContentTools />
            <ContentTableType2 data={data} columns={columns} onSave={saveOrder}/>
        </div>
    </>
}
export default CompanyBranchMenues;