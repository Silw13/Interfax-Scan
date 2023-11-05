import React, { createContext, useState } from "react";

export const RequestContext = createContext();

export const RequestProvider = ({ children }) => {
    const [requestData, setRequestData] = useState({
            "buttonClicked": false,
            "checkbox1Checked": false,
            "checkbox2Checked": false,
            "checkbox3Checked": false,
            "checkbox4Checked": false,
            "checkbox5Checked": false,
            "checkbox6Checked": false,
            "checkbox7Checked": false,
            "endDate": "",
            "inn": "",
            "limit": "",
            "startDate": "",
            "type": "any"
          
    });

    return (
        <RequestContext.Provider value={{ requestData, setRequestData }}>
            {children}
        </RequestContext.Provider>
    );
};