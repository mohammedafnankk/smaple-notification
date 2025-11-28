import axios from 'axios';
import React, { useEffect } from 'react';

const CommunityLogin = () => {
    useEffect(()=>{
        try {
            axios.get('http://localhost:8000/api/community/single-blood-request/440de83f-c479-4bd2-89b9-55ec70aa5636/ade83caa-d586-4c3e-9ad0-4b552dec940f',{ headers: { Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkZTgzY2FhLWQ1ODYtNGMzZS05YWQwLTRiNTUyZGVjOTQwZiIsInJvbGUiOiJhZG1pbiIsIm5hbWUiOiJNYXJ2ZWxzIiwiZW1haWwiOiJhdmVuZ2Vyc0BnbWFpbC5jb20iLCJpYXQiOjE3NjQxNzkxNDEsImV4cCI6MTc2NDI2NTU0MX0.ixOUpgriVLgi5ni6iNhmSDgc2ghNqQMPCs_Dp4NZNr0'}` } }).then((res)=>{
                console.log(res.data.data.donation_details[0].donated_users[0].CommunityMember.user);
                
            }).catch((err)=>console.log(err))
        } catch (error) {
            console.log(error);
            
        }
    },[])
    return (
        <div>
            
        </div>
    );
}

export default CommunityLogin;
