"use client";

import React, { createContext, useEffect, useState } from "react";

export type ContextType = {
  selectedSection: string;
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoaded: boolean;
};

const Context = createContext<ContextType | undefined>(undefined);

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [selectedSection, setSelectedSection] = useState<string>("work");
  const [loading, setLoading] = useState<boolean>(
    (isLoaded as unknown as boolean) || false
  );

  useEffect(() => {
    setIsLoaded(localStorage.getItem("loaded") === "true" ? true : false);
  }, []);

  return (
    <Context.Provider
      value={{
        selectedSection,
        setSelectedSection,
        loading,
        setLoading,
        isLoaded,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
