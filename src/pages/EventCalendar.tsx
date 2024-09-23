import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import calendar styles

const EventCalendar: React.FC = () => {
  const [date, setDate] = React.useState(new Date());

  const onDateChange = (newDate: Date) => {
    setDate(newDate);
    console.log("Selected date: ", newDate);
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-5">Event Calendar</h2>
      <Calendar onChange={onDateChange} value={date} />
    </div>
  );
};

export default EventCalendar;
