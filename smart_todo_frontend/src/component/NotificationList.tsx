// NotificationList.tsx
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const NotificationList: React.FC = () => {
  const [notifications, setNotifications] = useState<string[]>([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        if (!token) return;
        const res = await fetch("http://localhost:8000/api/notifications", {
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        });
        const data = await res.json();
        setNotifications(data);
      } catch (error) {
        console.log(error);
        alert("Error while fetching notifications");
      }
    };
    fetchNotifications();
  }, [token]);
  console.log(notifications);
  return (
    <div>
      {notifications.length === 0 ? (
        <p className="text-gray-700">No notifications</p>
      ) : (
        <>
          {notifications.map((notification, index) => (
            <p key={index} className="mb-1 text-gray-700 text-sm p-2 bg-white rounded">
              &rarr; {notification}
            </p>
          ))}
        </>
      )}
    </div>
  );
};
