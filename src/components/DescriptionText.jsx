import React, { useState } from "react";
import { GetTime } from "../utils/GetTime.jsx";
import { GetViews } from "../utils/GetViews.jsx";

export const DescriptionText = ({ description, date, views }) => {
  const [isShow, setIsShow] = useState(false);
  const formattedDescription = description.replace(/\n/g, "<br>");

  return (
    <>
      <div
        
        className="description card p-2"
        style={{ textAlign: "justify" }}
      >
        <h6>
          <GetViews view={views} /> &nbsp;
          <GetTime date={date} />
        </h6>

        {isShow ? (
          <>
            <h6 dangerouslySetInnerHTML={{ __html: formattedDescription }} />
            <span onClick={() => setIsShow(false)}>...Show Less</span>
          </>
        ) : (
          <>
            <h6 className="text-collapse-3" dangerouslySetInnerHTML={{ __html: formattedDescription }} />
            <span onClick={() => setIsShow(true)}>...Show More</span>
          </>
        )}
      </div>
    </>
  );
};
