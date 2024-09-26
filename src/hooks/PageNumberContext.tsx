import { createContext, useContext, useState } from 'react';
import { ContextProviderProps } from './ContextProviderProps';

interface CurrentPageContextType {
	currentPage: number;
	setCurrentPage: (number: number) => void;
}

const defaultContextValue: CurrentPageContextType = {
	currentPage: -1,
	setCurrentPage: () => { },
};

const CurrentPageContext = createContext<CurrentPageContextType>(defaultContextValue);

export const useCurrentPage = () => useContext(CurrentPageContext);

export const CurrentPageProvider: React.FC<ContextProviderProps> = ({ children }) => {
	const [currentPage, setCurrentPage] = useState(-1);

	return (
		<CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
			{children}
		</CurrentPageContext.Provider>
	);
};
