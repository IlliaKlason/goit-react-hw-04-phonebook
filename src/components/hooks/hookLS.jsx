import { useState, useEffect } from 'react';
const KEY = 'ContactsList';
export function useHookLS(initial) {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem(KEY)) ?? initial
  );

  useEffect(() => localStorage.setItem(KEY, JSON.stringify(state)));

  return [state, setState];
}

// export function useHookLS(initial) {
//    const [state, setState] = useState(
//      () => JSON.parse(window.localStorage.getItem(KEY)) ?? initial
//    );

//    useEffect(() => {
//      window.localStorage.setItem(KEY, JSON.stringify(state));
//    }, [state]);
//    return [state, setState];
//  }
