import './style.css'
import { Breadcrumb, Button } from "antd";
import { SearchProps } from "antd/es/input";
import Search from 'antd/es/input/Search';
import { Link, useLocation } from "react-router-dom";

const ToolsMasterUser:React.FC = () => {
    //location props
    const path =  useLocation().pathname;
    const location = path.split('/');
    const breadcrumb = location.slice(3,);
    const breadcrumbTitles = breadcrumb.filter((item, index) => index % 2 === 0);
    const pageName = location[location.length-1];
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
                    title: 'Master Users',
                  }]}/>}
            <div className='searchAdd'>
              <Search placeholder="input search text" className='search'  onSearch={onSearch} enterButton />
              <Button type='primary'className='add' > <Link to="./masterUser/add">Add Master User </Link></Button>
            </div>
      </>
  }
export default ToolsMasterUser;