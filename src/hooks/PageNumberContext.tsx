import { createContext, ReactNode, useContext, useState } from 'react';

interface PageNumberContextType {
	pageNumber: number;
	setPageNumber: (number: number) => void;
}

const defaultContextValue: PageNumberContextType = {
	pageNumber: 0,
	setPageNumber: () => { },
};

const PageNumberContext = createContext<PageNumberContextType>(defaultContextValue);

export const usePageNumber = () => useContext(PageNumberContext);

interface PageNumberProviderProps {
	children: ReactNode;
}

export const PageNumberProvider: React.FC<PageNumberProviderProps> = ({ children }) => {
	const [pageNumber, setPageNumber] = useState(5);

	return (
		<PageNumberContext.Provider value={{ pageNumber, setPageNumber }}>
			{children}
		</PageNumberContext.Provider>
	);
};
