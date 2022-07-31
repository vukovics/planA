import { FunctionComponent, PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const ReactQueryWrapper: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
export { ReactQueryWrapper };
