import './style.css'
import { useLocation } from 'react-router-dom';
import Partners from '../Partner/Partners/Partners';
import CompanyBranches from '../Partner/CompanyBranches/CompanyBranches';
import CompanyBranchMenues from '../Partner/CompanyBranchMenues/CompanyBranchMenues';
import CompanyBranchMenuProducts from '../Partner/CompanyBranchMenuProducts/CompanyBranchMenuProducts';
import AccountSettings from '../Main/AccountSettings/AccountSettings';
import MasterUser from '../MasterUser/MasterUser/MasterUser';
import AddMasterUser from '../MasterUser/AddMasterUser/AddMasterUser';
const Content:React.FC = () => {
    const path = useLocation().pathname;
    const location = path.split('/');
    const length = path.split('/').length;
    return<>
          <div className='content'>
            {path === '/admin/partners' && <Partners />}
            {path === '/admin/masterUser' && <MasterUser />}
            {path === '/admin/masterUser/add' && <AddMasterUser />}
            {path === '/admin/accountSettings' && <AccountSettings />}
            {path === `/admin/partners/${location[length - 2]}/branches` && <CompanyBranches />}
            {path === `/admin/partners/${location[length - 4]}/branches/${location[length-2]}/menues` && <CompanyBranchMenues/>}
            {path === `/admin/partners/${location[length - 6]}/branches/${location[length-4]}/menues/${location[length-2]}/products` && <CompanyBranchMenuProducts/>}
          </div>
    </>
}
export default Content;