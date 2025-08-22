# Comment Forum

A modern comment forum built with Next.js 13+ App Router, Material-UI, and following Vercel Commerce architecture patterns.

## Architecture

This project follows Vercel Commerce patterns with:

- **Server Components by default** - Only use client components when absolutely necessary
- **Server-side data fetching** - Data is fetched on the server, not in useEffect
- **Server Actions** - Form submissions and mutations use server actions
- **Proper error handling** - Next.js error boundaries and error.tsx
- **Loading states** - Built-in loading.tsx for better UX
- **Type safety** - Full TypeScript support

## Project Structure

```
app/
├── components/
│   ├── CommentActions.tsx     # Client component for like/reply actions
│   ├── CommentItem.tsx        # Server component for individual comments
│   ├── CommentList.tsx        # Server component for comment list
│   ├── NewCommentForm.tsx     # Client component for comment creation
│   └── layout/
│       ├── Header.tsx         # Client component for navigation
│       └── Theme.tsx          # Client component for Material-UI theme
├── error.tsx                  # Error boundary for the app
├── loading.tsx                # Loading state for the app
├── not-found.tsx              # 404 page
├── layout.tsx                 # Root layout with metadata
└── page.tsx                   # Main page with server-side data fetching

lib/
├── actions/
│   └── comments.ts            # Server actions for comment operations
├── db/
│   ├── index.ts               # Database client and queries
│   ├── mutations/
│   ├── queries/
│   ├── prisma.ts              # Prisma client
│   └── types.ts               # TypeScript types
├── constants.ts               # App constants
└── OAuthClient.ts             # Google OAuth client
```

## Key Features

### Server Components
- `CommentList` - Renders the list of comments with data passed as props
- `CommentItem` - Renders individual comments with proper nesting
- `page.tsx` - Main page that fetches data server-side

### Client Components
- `CommentActions` - Handles like/reply interactions
- `NewCommentForm` - Handles comment creation with form state
- `Header` - Navigation with OAuth integration

### Server Actions
- `createCommentAction` - Creates new comments with validation
- `getCommentsAction` - Fetches all comments
- `getCommentAction` - Fetches individual comments

### Error Handling
- `error.tsx` - Global error boundary
- `not-found.tsx` - 404 page
- Form-level error handling in client components

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

3. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

4. Run the development server:
```bash
npm run dev
```

## Development

### Adding New Features

1. **Server Components** - Create components without 'use client' for static rendering
2. **Client Components** - Add 'use client' only when you need interactivity
3. **Server Actions** - Create actions in `lib/actions/` for form submissions
4. **Error Handling** - Use try-catch in server actions and error boundaries

### Best Practices

- Use server components by default
- Only use client components for interactivity
- Fetch data on the server when possible
- Use server actions for mutations
- Handle errors gracefully at multiple levels
- Keep components focused and single-purpose

## Technologies

- **Next.js 13+** - App Router with server components
- **Material-UI** - Component library
- **Prisma** - Database ORM
- **GraphQL** - API layer with GraphQL Yoga
- **TypeScript** - Type safety
- **PostgreSQL** - Database
