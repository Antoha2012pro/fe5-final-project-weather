// useIconActions.js
import { useState } from "react";

export const useIconActions = () => {
  const [states, setStates] = useState({});

  const setStatus = (name, status) => {
    setStates((prev) => ({
      ...prev,
      [name]: status,
    }));
  };

  const runAction = async (name, action, successDuration = 800) => {
    if (states[name] === "loading") return;

    setStatus(name, "loading");

    try {
      await action();

      setStatus(name, "success");

      await new Promise((resolve) =>
        setTimeout(resolve, successDuration),
      );

      setStatus(name, "idle");
    } catch (error) {
      console.error(error);
      setStatus(name, "idle");
    }
  };

  return {
    states,
    runAction,
  };
};