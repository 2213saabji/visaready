// NavigationContext.js
import React, {createContext, useState, useContext} from 'react';

const NavigationContext = createContext();

export const NavigationProvider = ({children}) => {
  const [isNavigating, setIsNavigating] = useState(false);

  return (
    <NavigationContext.Provider value={{isNavigating, setIsNavigating}}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
