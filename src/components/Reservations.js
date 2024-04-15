
import React from "react";
import BookingForm from "./BookingForm";

const Reservations = ({ availableTimes, dispatchTimes, updateTimes, initializeTimes }) => {
    return (
        <BookingForm availableTimes={availableTimes} dispatchTimes={dispatchTimes} updateTimes={updateTimes} initializeTimes={initializeTimes} />
    );
}
export default Reservations;
