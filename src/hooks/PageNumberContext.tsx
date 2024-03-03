import { createContext, ReactNode, useContext, useState } from 'react';

interface CurrentPageContextType {
	currentPage: number;
	setCurrentPage: (number: number) => void;
}

const defaultContextValue: CurrentPageContextType = {
	currentPage: 0,
	setCurrentPage: () => { },
};

const CurrentPageContext = createContext<CurrentPageContextType>(defaultContextValue);

export const useCurrentPage = () => useContext(CurrentPageContext);

interface CurrentPageProviderProps {
	children: ReactNode;
}

export const CurrentPageProvider: React.FC<CurrentPageProviderProps> = ({ children }) => {
	const [currentPage, setCurrentPage] = useState(0);

	return (
		<CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
			{children}
		</CurrentPageContext.Provider>
	);
};
