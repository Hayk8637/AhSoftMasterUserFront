import { useState } from "react";
import { IMasterUser } from "../../Views/Interface";
import { Button, Input } from "antd";
import MasterUserTable from "../MasterUserTable/MasterUserTable";

const MasterUser:React.FC = () => {
  const [data, setData] = useState<IMasterUser[]>([
    {
      id: '1',
      username: 'John Doe',
      roll: 'Title 1',
      email: 'john@example.com',
      editable: true,
    },
    {
      id: '2',
      username: 'Jane Smith',
      roll: 'Title 2',
      email: 'jane@example.com',
      editable: false,
    },
    ...Array.from({ length: 148 }, (_, index) => ({
      id: (index + 3).toString(),
      username: index % 2 === 0 ? 'John Doe' : 'Jane Smith',
      roll: `Title ${index + 3}`,
      email: index % 2 === 0 ? 'john@example.com' : 'jane@example.com',
      editable: index % 2 === 0,
    })),
  ]);
      const columns: any[] = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
          editable: true,
          render: (text: string, record: IMasterUser) => {
            return isEditing(record) ? (
              <Input defaultValue={record.username} />
            ) : (
              text
            );
          },
        },
        {
          title: 'Username',
          dataIndex: 'username',
          key: 'username',
          editable: true,
          render: (text: string, record: IMasterUser) => {
            return isEditing(record) ? (
              <Input defaultValue={record.username} />
            ) : (
              text
            );
          },
        },
        {
          title: 'Position/Roll',
          dataIndex: 'roll',
          key: 'roll',
          editable: true,
          render: (text: string, record: IMasterUser) => {
            return isEditing(record) ? (
              <Input defaultValue={record.username} />
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
          render: (text: string, record: IMasterUser) => {
            return isEditing(record) ? (
              <Input defaultValue={record.username} />
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
        //Editing company
        const [editingKey, setEditingKey] = useState('');
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
        
    return <>
        <MasterUserTable  data={data} columns={columns} />
    </>
}
export default MasterUser;