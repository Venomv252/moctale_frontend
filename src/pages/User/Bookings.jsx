import React from "react";
import GenericPage from "./GenericPage";
import { Ticket, Calendar, MapPin, Clock } from "lucide-react";

const Bookings = () => {
  return (
    <GenericPage
      icon={Ticket}
      title="My Bookings"
      description="View and manage your movie ticket bookings. Access tickets, view booking history, and get reminders."
      features={[
        {
          icon: Calendar,
          title: "Upcoming Bookings",
          description: "See all your upcoming movie tickets and show timings.",
        },
        {
          icon: MapPin,
          title: "Theater Locations",
          description: "Get directions and information about your booked theaters.",
        },
        {
          icon: Clock,
          title: "Booking History",
          description: "View your past bookings and ticket purchase history.",
        },
      ]}
    />
  );
};

export default Bookings;
