import React, { createContext, useState, useContext } from "react";

const ToolContext = createContext();

export function ToolProvider({ children }) {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  return (
    <ToolContext.Provider value={{ answers, setAnswers, result, setResult }}>
      {children}
    </ToolContext.Provider>
  );
}

export function useTool() {
  return useContext(ToolContext);
}
