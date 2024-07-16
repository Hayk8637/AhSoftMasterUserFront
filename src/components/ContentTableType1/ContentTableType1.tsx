import { useState } from 'react';
import { IAdminContentTableType1 } from '../Views/Interface';
import './style.css'
import { Pagination, PaginationProps, Table } from 'antd';
// import ContentTools from '../ContentTools/ContentTools';


const ContentTableType1:React.FC<IAdminContentTableType1> = ({ data, columns }) => {
  
    //pagination
    const [current, setCurrent] = useState(1);
    const onChange: PaginationProps['onChange'] = (page, pageSize) => {
      console.log(page, pageSize);
      setCurrent(page);
    };
  
    return (
      <div className='table'>
        {/* <ContentTools /> */}
        <Table columns={columns} dataSource={data} scroll={{ y: 'calc(100vh - 260px )' }} pagination={false} />
        <Pagination className='pagination' pageSizeOptions={[10, 20, 50]} current={current} onChange={onChange} total={data.length} />
      </div>  
    );
  };
  
export default ContentTableType1;