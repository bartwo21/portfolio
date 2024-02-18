"use client";

import React, { createContext, useState } from "react";

export type ContextType = {
  selectedSection: string;
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>;
};

const Context = createContext<ContextType | undefined>(undefined);

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedSection, setSelectedSection] = useState<string>("work");

  return (
    <Context.Provider
      value={{
        selectedSection,
        setSelectedSection,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
