import { useQuery } from "@tanstack/react-query";
const BASE_URL = "https://api.v2.emissions-api.org/api/v2";

export function API({
  url,
  params,
}: {
  url: string;
  params?: {};
}): Promise<Response> {
  return fetch(`${BASE_URL}/${url}`, {
    ...params,
  });
}

export async function fetchGHGTypes() {
  const response = await API({
    url: "products.json",
  });
  return await response.json();
}

export const useGHGTypes = () => {
  return useQuery(["ghg-types"], fetchGHGTypes, {
    refetchOnWindowFocus: false,
  });
};

export async function fetchSingleTypes(typeName: string) {
  const response = await API({
    url: `${typeName}/average.json?country=DE&begin=2019-02-01&end=2022-06-15`,
  });
  return await response.json();
}

export function useSingleGHGType(typeName: string) {
  return useQuery(
    ["single-ghg-type", typeName],
    () => fetchSingleTypes(typeName),
    {
      enabled: !!typeName,
      refetchOnWindowFocus: false,
    }
  );
}
