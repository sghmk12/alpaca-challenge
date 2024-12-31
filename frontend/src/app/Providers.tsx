'use client'

import { Provider as JotaiProvider } from 'jotai'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

export default function RecoilContextProvider ({ children }: React.PropsWithChildren) {
  return <JotaiProvider>
    <QueryClientProvider client={queryClient}>
    {children}
    </QueryClientProvider>
    </JotaiProvider>;
};
