import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { debounce, get } from "lodash";
import { useUrlParams } from "../../../shared/hooks/useUrlParams";

interface SearchFormInputs {
  searchTerm: string;
}

export const useSearch = () => {
  const { getParam, setParam, deleteParam } = useUrlParams();
  const { register, watch, setValue } = useForm<SearchFormInputs>({
    defaultValues: {
      searchTerm: getParam("query", ""),
    },
  });

  const searchTerm = watch("searchTerm");

  const updateSearchParams = debounce((query: string) => {
    if (query) {
      setParam("query", query);
      setParam("page", "1");
    } else {
      deleteParam("query");
      deleteParam("page");
    }
  }, 500);

  useEffect(() => {
    const subscription = watch((value) => {
      updateSearchParams(value.searchTerm || "");
    });
    return () => {
      subscription.unsubscribe();
      updateSearchParams.cancel();
    };
  }, [watch]);

  const handleSearchCancel = () => setValue("searchTerm", "");

  return {
    searchTerm,
    register,
    handleSearchCancel,
  };
};
