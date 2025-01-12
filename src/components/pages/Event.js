import React from "react";
import "./Event.css";
import { singularSdk } from "singular-sdk";
import { useState } from "react";

const Event = () => {
    const [eventName, setEventName] = useState("");
    const handleEvent = () => {
        if (!eventName.trim()) {
            alert("Please enter an event name");
            return;
        }
        console.log("Event sent");
        singularSdk.event(eventName, {
            "data": "test"
        });
    }

    const handleRevenueEvent = () => {
        console.log("Revenue event sent");
        singularSdk.revenue("purchase_item", "USD", 100, {
            "product_id": "test_item",
            "quantity": 1,
            "price": 100,
            "currency": "USD"
        });
    }

    return (
        <div className="event-container">
            <h1>Event</h1>
            <p>This is the event page of the Singular React application.</p>
            <div className="event-input-container">
                <input 
                    type="text" 
                    placeholder="Enter your event name" 
                    className="event-input"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                />
                <button className="event-button" onClick={handleEvent}>Send Event</button>
                <button className="event-button" onClick={handleRevenueEvent}>Send Revenue Event</button>
            </div>
        </div>
    );
}

export default Event