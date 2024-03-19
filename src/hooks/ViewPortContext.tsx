import React, { createContext, useState, useEffect } from 'react';
import { ContextProviderProps } from './ContextProviderProps';

interface IsMobileContextType {
	isMobile: boolean;
	setIsMobile: (isMobile: boolean) => void;
}

const defaultContextValue: IsMobileContextType = {
	isMobile: false,
	setIsMobile: () => { },
};

const IsMobileContext = createContext<IsMobileContextType>(defaultContextValue);

export const useIsMobile = () => React.useContext(IsMobileContext);

export const IsMobileProvider: React.FC<ContextProviderProps> = ({ children }) => {
	const [isMobile, setIsMobile] = useState<boolean>(false);

	// initialize isMobile state based on window.innerWidth
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 600);
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<IsMobileContext.Provider value={{ isMobile, setIsMobile }}>
			{children}
		</IsMobileContext.Provider>
	);
};