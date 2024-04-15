import React, { useState } from 'react';

// Mock API Data
const availableTimesByDate = {
    '2024-04-15': ['10:00', '11:00', '12:00'],
    '2024-04-16': ['10:00', '11:00', '12:00'],
    '2024-04-17': ['10:00', '11:00', '12:00'],
    '2024-04-18': ['10:00', '11:00', '12:00'],
    '2024-04-19': ['10:00', '11:00', '12:00'],
    '2024-04-20': ['10:00', '11:00', '12:00'],
    '2024-04-21': ['10:00', '11:00', '12:00'],
    '2024-04-22': ['10:00', '11:00', '12:00'],
    '2024-04-23': ['10:00', '11:00', '12:00'],
    '2024-04-24': ['10:00', '11:00', '12:00'],
    '2024-04-25': ['10:00', '11:00', '12:00'],
    '2024-04-26': ['10:00', '11:00', '12:00'],
    '2024-04-27': ['10:00', '11:00', '12:00'],
    '2024-04-28': ['10:00', '11:00', '12:00'],
    '2024-04-29': ['10:00', '11:00', '12:00'],
    '2024-04-30': ['10:00', '11:00', '12:00'],

};

// Mock API Functions

// Fetch available times based on a given date
const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (availableTimesByDate[date]) {
                resolve(availableTimesByDate[date]);
            } else {
                reject(new Error('No available times for the selected date.'));
            }
        }, 1000); // Simulate network delay
    });
};

// Submit booking information and update available times
const submitAPI = (formData) => {
    if (availableTimesByDate[formData.date]) {
        availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (formData) {
                resolve(true); // Simulate successful submission
            } else {
                reject(new Error('Form submission failed.'));
            }
        }, 1000); // Simulate API delay
    });
};

// React Component
    const BookingForm = () => {
        const [date, setDate] = useState('');
        const [time, setTime] = useState('');
        const [guests, setGuests] = useState(1);
        const [occasion, setOccasion] = useState('');
        const [availableTimes, setAvailableTimes] = useState([]);
        const [isLoading, setIsLoading] = useState(false);
        const [error, setError] = useState('');
    
        // New state variables to track field interactions
        const [dateTouched, setDateTouched] = useState(false);
        const [timeTouched, setTimeTouched] = useState(false);
    
        const handleDateChange = async (e) => {
            setDate(e.target.value);
            setDateTouched(true); // Set date as touched
            if (e.target.value) {
                try {
                    setIsLoading(true);
                    setError('');
                    const times = await fetchAPI(e.target.value);
                    setAvailableTimes(times);
                    setTime(times.length > 0 ? times[0] : '');
                } catch (err) {
                    setError('Failed to fetch available times');
                    setAvailableTimes([]);
                } finally {
                    setIsLoading(false);
                }
            }
        };
    
        const handleSubmit = async (e) => {
            e.preventDefault();
        
            // Check if the date or time hasn't been touched or is empty
            if (!dateTouched || !date || !timeTouched || !time) {
                setError('Please make sure to select both a date and a time.');
                return; // Stop the submission process
            }
        
            const formData = {
                date,
                time,
                guests,
                occasion
            };
        
            try {
                setIsLoading(true);
                const success = await submitAPI(formData);
                if (success) {
                    alert('Your reservation has been successfully submitted!');
                } else {
                    setError('Submission failed');
                }
            } catch (err) {
                setError('Error while submitting form');
            } finally {
                setIsLoading(false);
            }
        };
        return (
            <form aria-labelledby="bookingFormTitle" onSubmit={handleSubmit}>
                <h2 id="bookingFormTitle">Book Now</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>} 
                <div id="booking-container">
                    <div className='form-styles'>
                        <label htmlFor="res-date">Choose date:</label>
                        <input
                            className="form-input"
                            type="date"
                            id="res-date"
                            value={date}
                            onChange={handleDateChange}
                            onBlur={() => setDateTouched(true)}
                            aria-required="true"
                        />
                        {dateTouched && !date && <p style={{ color: 'red' }}>Please select a date.</p>}
 
                        <label htmlFor="res-time">Choose time:</label>
                        <select
                            className="form-input"
                            id="res-time"
                            value={time}
                            onChange={(e) => { setTime(e.target.value); setTimeTouched(true); }}
                            onBlur={() => setTimeTouched(true)}
                            aria-required="true"
                        >
                            {availableTimes.length > 0 && availableTimes.map((time, index) => (
                                <option key={index} value={time}>
                                    {time}
                                </option>
                            ))}
                            {availableTimes.length === 0 && !isLoading && (
                                <option value="">No times available</option>
                            )}
                        </select>
                        {timeTouched && !time && <p style={{ color: 'red' }}>Please select a time.</p>}

                <label htmlFor="guests">Number of guests:</label>
                <input
                className="form-input"
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    aria-required="true"
                />
                <label htmlFor="occasion">Occasion:</label>
                <select
                className="form-input"
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    aria-required="true"
                >
                    <option value="">Please select</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <input
                        className="button-styles"
                        type="submit"
                        value="Make Your reservation"
                        disabled={isLoading}
                        aria-label="Submit Reservation"
                    />
            </div>
            </div>
        </form>
    );
}

export default BookingForm;
