import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatchTimes, initializeTimes }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');

    const handleDateChange = (event) => {
        setDate(event.target.value);
        dispatchTimes({
            type: 'UPDATE_TIMES',
            payload: initializeTimes()
        });
    };

    return (
        
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} aria-labelledby="bookingFormTitle">
            <h2 id="bookingFormTitle">Book Now</h2>
            <div>
                <label htmlFor="res-date">Choose date:</label>
                <input type="date" id="res-date" value={date} onChange={handleDateChange} aria-required="true" />
            </div>
            <div>
                <label htmlFor="res-time">Choose time:</label>
                <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} aria-required="true">
                    {availableTimes.map((timeOption, index) => (
                        <option key={index} value={timeOption}>{timeOption}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="guests">Number of guests:</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} aria-required="true" />
            </div>
            <div>
                <label htmlFor="occasion">Occasion:</label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} aria-required="true">
                    <option value="">Please select</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Make Your reservation" />
            </div>
        </form>
    );
}

export default BookingForm;
