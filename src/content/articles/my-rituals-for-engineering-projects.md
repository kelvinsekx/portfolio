---
title: "The rituals for all my projects"
date: "2025-07-08"
lastupdated: "2025-07-08"
description: "Repository I come to whenever I want to setup an engineering or managerial project"
---

This is a frequently updated post where I help myself by documenting rituals to be followed when setting up projects I am handling.

## Next Projects

### Create a new Next.js App

```bash
npx next-create-app
```

### Install Ultracite

If I am not the only one building the project

```bash
npx ultracite init

```

### Setup TailwindCSS



### Initialize Shadcn UI

```bash
npx shadcn@latest init
```

### Add all shadcn components

```bash
npx shadcn@latest add -all

```

### Setup Tanstack
[Learn more about Tanstack query](https://tanstack.com/query/v5/docs/framework/react/guides/advanced-ssr)


```bash
// In Next.js, this file would be called: app/providers.tsx
'use client'

// Since QueryClientProvider relies on useContext under the hood, we have to put 'use client' on top
import {
  isServer,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1000,
      },
    },
  })
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient()
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
  }
}

export default function Providers({ children }: { children: React.ReactNode }) {
  // NOTE: Avoid useState when initializing the query client if you don't
  //       have a suspense boundary between this and the code that may
  //       suspend because React will throw away the client on the initial
  //       render if it suspends and there is no boundary
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
```

```bash
// In Next.js, this file would be called: app/layout.tsx
import Providers from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
```
