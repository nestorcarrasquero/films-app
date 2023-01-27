import { useState } from "react"

export function useLocalStorage(key: any, initialValue: any) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch(error) {
      return initialValue;
    }
  })

  const setValue = (value: string) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch(error) {
      console.error(error);
    }
  }
  return [storedValue, setValue];
};