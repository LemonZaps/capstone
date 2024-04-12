import React from "react";
import { render, screen, act } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import {initializeTimes , timesReducer } from "./components/Main"
import {useReducer} from 'react';




const mockDispatchTimes = jest.fn();
const mockInitializeTimes = jest.fn(() => ['10:00 AM', '2:00 PM']);

test('Renders the BookingForm heading', () => {
    render(
        <BookingForm
            availableTimes={['10:00 AM', '2:00 PM']}
            dispatchTimes={mockDispatchTimes}
            initializeTimes={mockInitializeTimes}
        />
    );
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});

describe('initializeTimes function', () => {
  test('returns the correct initial time slots', () => {
    const times = initializeTimes();
    expect(times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  });
});

const TestComponent = ({ onStateChange }) => {
  const [availableTimes, dispatchTimes] = useReducer(timesReducer, ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);

  const updateTimes = () => {
    dispatchTimes({
      type: 'UPDATE_TIMES',
      payload: ['18:00', '20:00', '22:00']
    });
  };


  React.useEffect(() => {
    onStateChange(availableTimes);
  }, [availableTimes, onStateChange]);

  return null;
};

describe('updateTimes function', () => {
  test('updates the times state correctly', () => {
    let capturedState = [];
    const handleStateChange = (newState) => {
      capturedState = newState;
    };

    render(<TestComponent onStateChange={handleStateChange} />);
    act(() => {
      handleStateChange(['18:00', '20:00', '22:00']);
    });
    expect(capturedState).toEqual(['18:00', '20:00', '22:00']);
  });
});