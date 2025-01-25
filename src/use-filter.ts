import { useSearchParams } from "react-router";

/**
 * Custom hook to manage a single query parameter in the URL search params.
 *
 * @param {string} queryKey - The key of the query parameter to manage.
 * @returns {object} An object containing:
 * - `searchParams`: The current URL search parameters.
 * - `selectedValue`: The value of the query parameter specified by `queryKey`.
 * - `handleSelect`: A function to update the value of the query parameter.
 * - `handleUpdate`: A function to append the value of the query parameter preserving the other query params.
 */
export function useSingleFilter(queryKey: string) {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedValue = searchParams.get(queryKey);

  const handleSelect = (value: string) => {
    setSearchParams({ [queryKey]: value });
  };

  const handleUpdate = (value: string) => {
    const urlParams = new URLSearchParams(searchParams);
    urlParams.set(queryKey, value);
    setSearchParams(urlParams);
  };

  return {
    searchParams,
    selectedValue,
    handleSelect,
    handleUpdate,
  };
}
