import React, {useState, useEffect} from "react";

function FriendListItem(props) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }

        chatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
        return () => {
            chatAPI.unsubscribeToFriendStatus(props.friend.id, handleStatusChange);
        }
    });

    return (
        <li style={{color: isOnline ? 'green' : 'gray'}}>
            {props.friend.name}
        </li>
    )
}