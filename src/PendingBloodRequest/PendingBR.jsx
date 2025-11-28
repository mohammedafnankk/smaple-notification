import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PendingBR = () => {
    const [requests,setRequests] = useState([]);
    const token = localStorage.getItem("token");
    useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("https://86l2d590-5000.inc1.devtunnels.ms/api/blood/pending-requests", { headers: { Authorization: `Bearer ${token}` } }).then((res)=>setRequests(res.data)).catch((err)=>console.log(err));
    //   setRequests(res.data);
    //   console.log(res.data.data.allPendingBloodRequest);
      
    };
    fetch();
    // console.log(requests,"rr");
    
  }, []);

    if (!requests || !requests.data || !requests.data.allPendingBloodRequest) {
        // You can render a loading state, a message, or null
        return <div>Loading pending blood requests...</div>; 
    }

    const mChat = async(id)=>{
           await axios.post("https://86l2d590-5000.inc1.devtunnels.ms/api/conversation",{otherUserId:id}, { headers: { Authorization: `Bearer ${token}` } }).then((res)=>{
            console.log(res.data);
            console.log("CC");
            
           }).catch((err)=>console.log(err))
    }

    return (
        <div>
           {requests.data.allPendingBloodRequest.map((r,i)=>(
            <div key={i}>
                <div>
                   {r?.requester.id} , {r?.requester.name} , {r?.requester.email}
                </div>
                <button onClick={()=>mChat(r?.requester.id)}>Message</button>
            </div>
           ))}
        </div>
    );
}

export default PendingBR;
