import React, { useEffect, useState } from "react";
import { format } from "date-fns";

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>{format(currentTime, "EEEE dd MMMM yyyy  hh:mm:ss a")}</p>
    </div>
  );
};

export default DateTime;
