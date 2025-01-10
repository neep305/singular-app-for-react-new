import React from "react";

const Event = () => {

    const handleEvent = () => {
        console.log("Event sent");
    }

    const handleRevenueEvent = () => {
        console.log("Revenue event sent");
    }

    return (
        <div className="event-container">
            <h1>Event</h1>
            <p>This is the event page of the Singular React application.</p>
            <div className="event-input-container">
                <input type="text" placeholder="Enter your event name" className="event-input" />
                <button className="event-button">Send Event</button>
                <button className="event-button">Send Revenue Event</button>
            </div>
        </div>
    );
}

export default Event