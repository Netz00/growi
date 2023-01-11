import { useEffect, useCallback } from 'react';

// https://stackoverflow.com/a/69729166/12108610

export default function useDebounce(effect: any, dependencies: any, delay: number) {
	const callback: Function = useCallback(effect, dependencies);

	useEffect(() => {
		const timeout = setTimeout(callback, delay);
		return () => clearTimeout(timeout);
	}, [callback, delay]);
}
