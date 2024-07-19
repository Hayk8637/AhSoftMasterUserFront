import { useEffect, useState } from "react";
import { IMasterUser } from "../../Views/Interface";
import { Button, Input, Pagination, PaginationProps, Table } from "antd";
import axios from "axios";
import ToolsMasterUser from "../ToolsMasterUser/ToolsMasterUser";
import './style.css';

const MasterUser: React.FC = () => {
  const [data, setData] = useState<IMasterUser[]>([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [total, setTotal] = useState(0);

  const columns: any = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 150,
      editable: true,
      render: (text: string, record: IMasterUser) => {
        return isEditing(record) ? (
          <Input defaultValue={record.id} />
        ) : (
          text
        );
      },
    },
    {
      title: 'FirstName',
      dataIndex: 'firstName',
      key: 'firstName',
      width: 150,
      editable: true,
      render: (text: string, record: IMasterUser) => {
        return isEditing(record) ? (
          <Input defaultValue={record.firstName} />
        ) : (
          text
        );
      },
    },
    {
      title: 'LastName',
      dataIndex: 'lastName',
      key: 'lastName',
      editable: true,
      width: 150,
      render: (text: string, record: IMasterUser) => {
        return isEditing(record) ? (
          <Input defaultValue={record.lastName} />
        ) : (
          text
        );
      },
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 150,
      editable: true,
      render: (text: string, record: IMasterUser) => {
        return isEditing(record) ? (
          <Input defaultValue={record.email} />
        ) : (
          text
        );
      },
    },
    {
      title: '',
      key: 'actions',
      fixed: 'right',
      width: 200,
      render: (record: IMasterUser) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Button type="primary" onClick={() => save(record)}>Save</Button>
            <Button onClick={cancel}>Cancel</Button>
          </span>
        ) : (
          <span>
            <Button type="link" onClick={() => edit(record)}>Edit</Button>
            <Button type="link" onClick={() => handleDelete(record)}>Delete</Button>
          </span>
        );
      },
    },
  ];

  const fetchData = async (page: number, pageSize: number) => {
    try {
      const response = await axios.get('http://87.241.134.159:3000/MasterUser', {
        params: {
          Page: page,
          CountPerPage: pageSize
        }
      });
      setData(response.data.map((item: IMasterUser) => ({ ...item, key: item.id }))); 
      setTotal(response.data.totalCount);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(current, pageSize);
  }, [current, pageSize]);

  const onChange: PaginationProps['onChange'] = (page, pageSize) => {
    setCurrent(page);
    setPageSize(pageSize);
    console.log(fetchData);
  };

  // Editing company
  const [editingKey, setEditingKey] = useState<string>('');
  const isEditing = (record: IMasterUser) => record.id === editingKey;
  const edit = (record: IMasterUser) => {
    setEditingKey(record.id);
  };
  const cancel = () => {
    setEditingKey('');
  };
  const save = (record: IMasterUser) => {
    const newData = [...data];
    const index = newData.findIndex(item => record.id === item.id);
    if (index > -1) {
      const item = newData[index];
      newData.splice(index, 1, { ...item });
      setData(newData);
      setEditingKey('');
    }
  };
  const handleDelete = (record: IMasterUser) => {
    setData(prevData => prevData.filter(item => item.id !== record.id));
  };

  return (
    <div className='MasterUsertable'>
      <ToolsMasterUser />
      <Table columns={columns} dataSource={data} scroll={{ y: 'calc(100vh - 260px )' }} pagination={false} />
      <Pagination
        className='pagination'
        pageSizeOptions={[10, 20, 50]}
        current={current}
        onChange={onChange}
        pageSize={pageSize}
        total={total}/>
    </div>
  );
}

export default MasterUser;
