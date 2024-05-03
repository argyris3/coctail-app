import { GrAdd } from 'react-icons/gr';
import { FcList } from 'react-icons/fc';
import { FaFirstOrder } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


const AdminSidebar = () => {
  return (
    <section className="w-[18%] min-h-screen  border-[1.5px] border-solid border-[#a9a9a9] border-t-0 text-[max(1vh_10px)]">
      <div className="pt-10 pl-[20%] flex flex-col gap-5">
        <button className="flex items-center gap-3 border-[1px] border-solid border-[#a9a9a9] border-r-0 p-2 cursor-pointer  rounded-[3px_0px_0px_3px] hover:bg-red-600">
          <GrAdd />
          <p className="hidden md:block">Add Items</p>
        </button>
        <NavLink
          to="/list"
          className="flex items-center gap-3 border-[1px] border-solid border-[#a9a9a9] border-r-0 p-2 cursor-pointer  rounded-[3px_0px_0px_3px] hover:bg-red-600"
        >
          <FcList />
          <p className="hidden md:block">List items</p>
        </NavLink>
        <NavLink
          to="orders"
          className="flex items-center gap-3 border-[1px] border-solid border-[#a9a9a9] border-r-0 p-2 cursor-pointer  rounded-[3px_0px_0px_3px] hover:bg-red-600"
        >
          <FaFirstOrder />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </section>
  );
};
export default AdminSidebar;
