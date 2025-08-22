import { memo } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <section className='bg-gray-300'>
        <div className='container w-full h-20  flex justify-between items-center'>
            <div>
                <h2>Logoo</h2>
            </div>
            <div className='flex gap-4'>
                <NavLink className={({isActive}) => (isActive ? "text-blue-500 underline" : "text-black")  } to={""}>Home</NavLink>
                <NavLink className={({isActive}) => (isActive ? "text-blue-500 underline" : "text-black")  } to={"profile"}>Profile</NavLink>
            </div>
            <div className='flex gap-4'>
                <button className='outline-0 rounded-[6px] px-3 py-2 bg-blue-600'>
                    <NavLink to={"register"}>Register</NavLink>
                </button>
                <button className='outline-0 rounded-[6px] px-3 py-2 bg-blue-600'>
                    <NavLink to={"login"}>Login</NavLink>
                </button>
            </div>
        </div>
    </section>
  );
};

export default memo(Header);