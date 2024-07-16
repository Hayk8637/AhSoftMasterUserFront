import './style.css';
import React, { useState } from 'react';
import { Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import { ICompany } from '../../Views/Interface';
import ContentTableType1 from '../../ContentTableType1/ContentTableType1';

const Partners: React.FC = () => {

  const [data, setData] = useState<ICompany[]>([
    {
      key: '1',
      name: 'John Doe',
      title: 'Title 1',
      dataIndex: 'Data Index 1',
      editable: true,
      countryCode: '1',
      phone: '123456789',
      region: 'Region 1',
      city: 'City 1',
      street: 'Street 1',
      building: 'Building 1',
      email: 'john@example.com',
      isVerify: false,
    },
    {
      key: '2',
      name: 'Jane Smith',
      title: 'Title 2',
      dataIndex: 'Data Index 2',
      editable: false,
      countryCode: '2',
      phone: '987654321',
      region: 'Region 2',
      city: 'City 2',
      street: 'Street 2',
      building: 'Building 2',
      email: 'jane@example.com',
      isVerify: true,
    },
    ...Array.from({ length: 148 }, (_, index) => ({
      key: (index + 3).toString(),
      name: index % 2 === 0 ? 'John Doe' : 'Jane Smith',
      title: `Title ${index + 3}`,
      dataIndex: `Data Index ${index + 3}`,
      editable: index % 2 === 0,
      countryCode: `${index + 3}`,
      phone: `${index + 3}${index + 3}${index + 3}${index + 3}${index + 3}${index + 3}${index + 3}${index + 3}${index + 3}`,
      region: `Region ${index + 3}`,
      city: `City ${index + 3}`,
      street: `Street ${index + 3}`,
      building: `Building ${index + 3}`,
      email: index % 2 === 0 ? 'john@example.com' : 'jane@example.com',
      isVerify: index % 2 === 0,
    })),
  ]);
  const columns: any[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      editable: true,
      render: (text: string, record: ICompany) => {
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
      key: 'email',
      editable: true,
      render: (text: string, record: ICompany) => {
        return isEditing(record) ? (
          <Input defaultValue={record.email} />
        ) : (
          text
        );
      },
    },
    {
      title: 'Country Code',
      dataIndex: 'countryCode',
      key: 'countryCode',
      editable: true,
      render: (text: string, record: ICompany) => {
        return isEditing(record) ? (
          <Input defaultValue={record.countryCode} />
        ) : (
          text
        );
      },
    },
    {
      title: 'Region',
      dataIndex: 'region',
      key: 'region',
      editable: true,
      render: (text: string, record: ICompany) => {
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
      editable: true,
      render: (text: string, record: ICompany) => {
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
      editable: true,
      render: (text: string, record: ICompany) => {
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
      editable: true,
      render: (text: string, record: ICompany) => {
        return isEditing(record) ? (
          <Input defaultValue={record.building} />
        ) : (
          text
        );
      },
    },
    {
      title: 'Is Verify',
      dataIndex: 'isVerify',
      key: 'isVerify',
      editable: true,
      render: (text: boolean, record: ICompany) => {
        return isEditing(record) ? (
          <Checkbox defaultChecked={record.isVerify} />
        ) : (
          String(text)
        );
      },
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record: ICompany) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Button type="primary" onClick={() => save(record)}>Save</Button>
            <Button onClick={cancel}>Cancel</Button>
          </span>
        ) : (
          <span>
            <Button type="link" ><Link to={`/admin/partners/${record.key}/branches`}>Branches</Link></Button>
            <Button type="link" onClick={() => edit(record)}>Edit</Button>
            {/* <Button type="link" onClick={() => handleDelete(record)}>Delete</Button> */}
          </span>
        );
      },
    },
  ];


  //Editing company
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record: ICompany) => record.key === editingKey;
  const edit = (record: ICompany) => {
    setEditingKey(record.key);
  };
  const cancel = () => {
    setEditingKey('');
  };
  const save = (record: ICompany) => {
    const newData = [...data];
    const index = newData.findIndex(item => record.key === item.key);
    if (index > -1) {
      const item = newData[index];
      newData.splice(index, 1, { ...item });
      setData(newData);
      setEditingKey('');
    }
  };
  // const handleDelete = (record: ICompnany) => {
  //   setData(prevData => prevData.filter(item => item.key !== record.key));
  // };
  // const handleBranches = (record: ICompnany) => {
  //   console.log("Branches for:", record);
  // };
  return (
    <ContentTableType1  data={data} columns={columns} />
  );
};

export default Partners;
