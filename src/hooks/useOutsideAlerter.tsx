import { useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(callback: any, state: boolean, ...refs: any) {
	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event: Event) {
			if (state) return;
			refs.every((ref: any) => {
				if (ref.current && !ref.current.contains(event.target)) {
					callback();
					return false;
				}
				return true;
			});
		}
		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, refs);
}

export default useOutsideAlerter;
