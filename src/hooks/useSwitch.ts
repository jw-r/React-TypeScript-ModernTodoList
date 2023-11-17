import { useState } from 'react';

export const useSwitch = (initState?: boolean) => {
  const [isOn, setIsOn] = useState(initState || false);

  const onSwitch = () => setIsOn(true);

  const offSwitch = () => setIsOn(false);

  const toggleSwitch = () => setIsOn((prev) => !prev);

  return { isOn, onSwitch, offSwitch, toggleSwitch };
};
