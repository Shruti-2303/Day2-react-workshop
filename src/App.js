import './App.css';
import React, { useState, useEffect} from 'react';
import axios from 'axios';
function App() {

  const [userDetails, setUserDetails] = useState();

  const user = async () => {
    try {
      const userDetail = await axios.get("https://randomuser.me/api/");
      setUserDetails(userDetail.data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(userDetails);
  useEffect(() => {
    user();
  },[]);
  
  return (
    <div>
      {userDetails && <img src={userDetails.picture.large}/>}
    </div>
  );
}

export default App;
