import React from "react";
import SavedCoin from "../components/SavedCoin";
import { UserAuth } from "../context/AuthContext";
import { useNavigate, Navigate } from "react-router-dom";

const Account = () => {
  
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  }
  if (user) {
    return (
      <div className='max-w-[1140px] mx-auto'>
      <div className='flex justify-between items-center my-12 py-8 rounded-div'>
        <div className='text-2xl '>
          <h1 className="font-bold text-2xl">Account</h1>
          <div>
            <p>Welcome, {user?.email}</p>
          </div>
        </div>
        <div>
          <button onClick={handleSignOut} className='border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl'>Sign Out</button>
        </div>
      </div>
      <div className='flex justfiy-between items-center my-12 py-8 rounded-div'>
        <div className='w-full min-h-[300px]'>
          <h1 className='text-2xl font-bold py-4'>Wacht list</h1>
          <SavedCoin />
        </div>
      </div>
    </div>
    )
  }
    else {
      return <Navigate to="/signin" />


  }
  
}

export default Account;
