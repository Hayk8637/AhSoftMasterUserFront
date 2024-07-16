import { Link, useLocation } from 'react-router-dom';
import './style.css'
import { Button, Input } from 'antd';
import { useState } from 'react';
import { IBranch } from '../../Views/Interface';
import ContentTableType1 from '../../ContentTableType1/ContentTableType1';


const CompanyBranches:React.FC = () => {
    const location = useLocation().pathname;
    const [data, setData] = useState<IBranch[]>([
      {
        key: '1',
        name: 'John Doe',
        email: 'john@example.com',
        countryCode: '1',
        phone: '1',
        region: '1',
        city: '1',
        street: '1',
        building: '1',
        wifiName: '1',
        wifiPass: '1',
        imgLink: '1',
      },
      {
        key: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        countryCode: '2',
        phone: '2',
        region: '2',
        city: '2',
        street: '2',
        building: '2',
        wifiName: '2',
        wifiPass: '2',
        imgLink: '2',
      },
      ...Array.from({ length: 148 }, (_, index) => ({
        key: (index + 3).toString(),
        name: index % 2 === 0 ? 'John Doe' : 'Jane Smith',
        email: index % 2 === 0 ? 'john@example.com' : 'jane@example.com',
        countryCode: `${index}`,
        phone: `${index}`,
        region: `${index}`,
        city: `${index}`,
        street: `${index}`,
        building: `${index}`,
        wifiName: `${index}`,
        wifiPass: `${index}`,
        imgLink: `${index}`,
      })),
    ]);
    const columns: any[] = [
      {
        title: 'Name',
        dataIndex: 'name',
        width: 200,
        key: 'name',
        editable: true,
        render: (text: string, record: IBranch) => {
          return isEditing(record) ? (
            <Input defaultValue={record.name} />
          ) : (
            text
          );
        },
      },
      {
        title: 'Email',
        dataIndex: 'email',
        width: 250,
        key: 'email',
        editable: true,
        render: (text: string, record: IBranch) => {
          return isEditing(record) ? (
            <Input defaultValue={record.email} />
          ) : (
            text
          );
        },
      },
      {
        title: 'Country Code',
        width: 200,
        dataIndex: 'countryCode',
        key: 'countryCode',
        editable: true,
        render: (text: string, record: IBranch) => {
          return isEditing(record) ? (
            <Input defaultValue={record.countryCode} />
          ) : (
            text
          );
        },
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        width: 200,
        editable: true,
        render: (text: string, record: IBranch) => {
          return isEditing(record) ? (
            <Input defaultValue={record.phone} />
          ) : (
            text
          );
        },
      },
      {
        title: 'Region',
        dataIndex: 'region',
        key: 'region',
        width: 200,
        editable: true,
        render: (text: string, record: IBranch) => {
          return isEditing(record) ? (
            <Input defaultValue={record.region} />
          ) : (
            text
          );
        },
      },
      {
        title: 'City',
        dataIndex: 'city',
        key: 'city',
        width: 200,
        editable: true,
        render: (text: string, record: IBranch) => {
          return isEditing(record) ? (
            <Input defaultValue={record.city} />
          ) : (
            text
          );
        },
      },
      {
        title: 'Street',
        dataIndex: 'street',
        key: 'street',
        width: 200,
        editable: true,
        render: (text: string, record: IBranch) => {
          return isEditing(record) ? (
            <Input defaultValue={record.street} />
          ) : (
            text
          );
        },
      },
      {
        title: 'Building',
        dataIndex: 'building',
        key: 'building',
        width: 200,
        editable: true,
        render: (text: string, record: IBranch) => {
          return isEditing(record) ? (
            <Input defaultValue={record.building} />
          ) : (
            text
          );
        },
      },
      {
        title: 'Wifi Name',
        dataIndex: 'wifiName',
        key: 'wifiName',
        width: 200,
        editable: true,
        render: (text: string, record: IBranch) => {
          return isEditing(record) ? (
            <Input defaultValue={record.wifiName} />
          ) : (
            text
          );
        },
      },
      {
        title: 'Wifi Pass',
        dataIndex: 'wifiPass',
        key: 'wifiPass',
        width: 200,
        editable: true,
        render: (text: string, record: IBranch) => {
          return isEditing(record) ? (
            <Input defaultValue={record.wifiPass} />
          ) : (
            text
          );
        },
      },
      {
        title: 'Image Link',
        dataIndex: 'imgLink',
        key: 'imgLink',
        width: 200,
        editable: true,
        render: (text: string, record: IBranch) => {
          return isEditing(record) ? (
            <Input defaultValue={record.imgLink} />
          ) : (
            text
          );
        },
      },
      {
        title: 'Actions',
        key: 'actions',
        width: 300 , 
        fixed: 'right',
        render: (text: string, record: IBranch) => {
          const editable = isEditing(record);
          return editable ? (
            <span>
              <Button type="primary" onClick={() => save(record)}>Save</Button>
              <Button onClick={cancel}>Cancel</Button>
            </span>
          ) : (
            <span>
              <Button type="link" ><Link to={`${location}/${record.key}/menues`}>Menues</Link></Button>
              <Button type="link" onClick={() => edit(record)}>Edit</Button>
              <Button type="link" onClick={() => handleDelete(record)}>Delete</Button>
            </span>
          );
        },
      },
    ];
  //Editing company 
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record: IBranch) => record.key === editingKey;
  const edit = (record: IBranch) => {
    setEditingKey(record.key);
  };
  const cancel = () => {
    setEditingKey('');
  };
  const save = (record: IBranch) => {
    const newData = [...data];
    const index = newData.findIndex(item => record.key === item.key);
    if (index > -1) {
      const item = newData[index];
      newData.splice(index, 1, { ...item });
      setData(newData);
      setEditingKey('');
    }
  };
  const handleDelete = (record: IBranch) => {
    setData(prevData => prevData.filter(item => item.key !== record.key));
  };
  // const handleBranches = (record: IBranch) => {
  //   console.log("Branches for:", record);
  // };
  // e=-09876
  //Column names  
    return <>
      <ContentTableType1 data={data} columns={columns}/>
    </>
}
export default CompanyBranches;