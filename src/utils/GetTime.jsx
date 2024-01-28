import React from "react";

export const GetTime = ({ date }) => {
  const endDate = Date.now();
  const timeDifferenceMS = endDate - new Date(date);
  const timeDifferenceSecs = Math.floor(timeDifferenceMS / 1000);
  const timeDifferenceMins = Math.floor(timeDifferenceMS / 60000);
  const timeDifferenceHours = Math.floor(timeDifferenceMS / 3600000);
  const timeDifferenceDays = Math.floor(timeDifferenceMS / 86400000);
  const timeDifferenceMonths = Math.floor(timeDifferenceMS / (86400000 * 30)); // assuming 30 days per month
  const timeDifferenceYears = Math.floor(timeDifferenceMonths / 12);

  let showDate = "";

  if (timeDifferenceSecs < 60) {
    showDate = `${timeDifferenceSecs} second${
      timeDifferenceSecs !== 1 ? "s" : ""
    } ago`;
  } else if (timeDifferenceMins < 60) {
    showDate = `${timeDifferenceMins} minute${
      timeDifferenceMins !== 1 ? "s" : ""
    } ago`;
  } else if (timeDifferenceHours < 24) {
    showDate = `${timeDifferenceHours} hour${
      timeDifferenceHours !== 1 ? "s" : ""
    } ago`;
  } else if (timeDifferenceDays < 30) {
    showDate = `${timeDifferenceDays} day${
      timeDifferenceDays !== 1 ? "s" : ""
    } ago`;
  } else if (timeDifferenceMonths < 12) {
    showDate = `${timeDifferenceMonths} month${
      timeDifferenceMonths !== 1 ? "s" : ""
    } ago`;
  } else {
    showDate = `${timeDifferenceYears} year${
      timeDifferenceYears !== 1 ? "s" : ""
    } ago`;
  }

  return <>{showDate}</>;
};
