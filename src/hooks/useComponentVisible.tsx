import { useState, useEffect, useRef } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
export default function useComponentVisible(initialIsVisible: boolean) {
	const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
	const ref: any = useRef(null);
	const refButton: any = useRef(null);
	/**
	 * Alert if clicked on outside of element
	 */
	const handleClickOutside = (event: Event) => {
		if (isComponentVisible) return;
		if (refButton.current && refButton.current.contains(event.target)) return;

		if (ref.current && !ref.current.contains(event.target)) {
			setIsComponentVisible(false);
		}
	};

	useEffect(() => {
		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside, true);
		return () => {
			// Unbind the event listener on clean up

			document.removeEventListener('mousedown', handleClickOutside, true);
		};
	}, []);

	return { ref, refButton, isComponentVisible, setIsComponentVisible };
}
