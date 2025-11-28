import React, { useEffect, useState } from "react";
import axios from "axios";

const ConversationsList = ({onSelect}) => {
    const [convs,setConvs] = useState([]);
    useEffect(() => {
    const fetch = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get("https://86l2d590-5000.inc1.devtunnels.ms/api/conversation", { headers: { Authorization: `Bearer ${token}` } });
      setConvs(res.data.data || []);
      console.log(res.data);
      
    };
    fetch();
  }, []);
    return (
         <div className="p-4">
      {convs.map((c) => (
        <div key={c.id} onClick={() => onSelect(c)} className="p-3 bg-white rounded mb-2 cursor-pointer flex justify-between">
          <div>
            <div className="font-medium">Conversation</div>
            <div className="text-xs text-gray-500">{c.last_message || "No messages yet"}</div>
          </div>
          <div className="text-xs text-gray-400">{c.last_message_at ? new Date(c.last_message_at).toLocaleString() : ""}</div>
        </div>
      ))}
    </div>
    );
}

export default ConversationsList;
