import React, { useState } from "react";
import Alert from "../Alert";
import { singularSdk } from "singular-sdk";

const Event = () => {
    const [eventName, setEventName] = useState("");
    const [alert, setAlert] = useState({ show: false, message: "" });

    const handleEvent = () => {
        if (!eventName.trim()) {
            setAlert({
                show: true,
                message: "Please enter an event name"
            });
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
        <div className="p-8 max-w-3xl mx-auto">
            <Alert 
                message={alert.message}
                isVisible={alert.show}
                onClose={() => setAlert({ ...alert, show: false })}
            />
            <h1 className="text-2xl font-bold mb-4">Event</h1>
            <p className="text-gray-600 mb-8">This is the event page of the Singular React application.</p>
            <div className="flex flex-col gap-4">
                <input 
                    type="text" 
                    placeholder="Enter your event name" 
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                />
                <div className="flex flex-col items-center gap-4">
                    <button 
                        className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-200"
                        onClick={handleEvent}
                    >
                        Send Event
                    </button>
                    <button 
                        className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-200"
                        onClick={handleRevenueEvent}
                    >
                        Send Revenue Event
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Event;