import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

const useQueryParams = (key: string) => {
	const toStringQuery = (param: string | null) => {
		return param === 'null' ? null : param;
	};
	const [searchParams, setSearchParams] = useSearchParams();
	const paramValue = searchParams.get(key);
	const value = useMemo(() => toStringQuery(paramValue), [paramValue]);

	const setValue: (newValue: string, options: any) => void = useCallback(
		(newValue, options) => {
			const newSearchParams = new URLSearchParams(searchParams);

			if (!newValue) {
				newSearchParams.delete(key);
			} else {
				newSearchParams.set(key, newValue);
			}

			setSearchParams(newSearchParams, options);
		},
		[key, searchParams, setSearchParams]
	);

	return [value, setValue] as [string, any];
};

export default useQueryParams;
