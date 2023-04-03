import React, { useState } from "react";
import Sidebar from "../components/staffSide";
import { send_reminder } from "../services/Apis";

const StaffReminder = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  var [emailContent, setEmailContent] = useState("");

  const sendEmail = async () => {
    try {
      setLoading(true);
      
      const data = {
          emailContent : emailContent
      }
      console.log(data);
      const response = await send_reminder({ data });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Failed to send email.");
    } finally {
      setLoading(false);
    }
  };
  

  const handleEmailContentChange = (event) => {
    setEmailContent(event.target.value);
  };

  return (
    <div>
      <Sidebar />
      <div className="bg-white-100 h-screen flex justify-center items-center" style={{ marginLeft: "420px" }}>
        <div className="bg-white p-10 rounded-lg shadow-md" >
          <h1 className="text-2xl mb-4">Send reminder to all registered users</h1>
          <textarea
            className="border border-gray-400 p-2 rounded-md w-full mb-4"
            rows={10}
            placeholder="Type your email contents here"
            value={emailContent}
            onChange={handleEmailContentChange}
          />
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={sendEmail}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send email"}
          </button>
          {message && (
            <p className="mt-4 text-green-500">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StaffReminder;