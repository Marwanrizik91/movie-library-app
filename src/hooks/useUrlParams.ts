import { useSearchParams } from "react-router-dom";

export const useUrlParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getParam = (key: string, defaultValue: string) =>
    searchParams.get(key) || defaultValue;

  const setParam = (key: string, value: string) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
  };

  const deleteParam = (key: string) => {
    searchParams.delete(key);
    setSearchParams(searchParams);
  };

  return { getParam, setParam, deleteParam };
};
