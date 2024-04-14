import { act, fireEvent, renderHook } from '@testing-library/react';
import { IsMobileProvider, useIsMobile } from './ViewPortContext';

describe('useIsMobile', () => {
	it('updates innerWidth and innerHeight values when window resizes', () => {
		window.innerWidth = 601;
		const { result } = renderHook(() => useIsMobile(), { wrapper: IsMobileProvider });

		expect(result.current.isMobile).toBeFalsy();

		act(() => {
			window.innerWidth = 600;

			fireEvent(window, new Event('resize'));
		})

		expect(result.current.isMobile).toBeTruthy();
	})
})