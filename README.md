## About the Lucid Task

This is a [Next.js](https://nextjs.org/) project made for a specific test task.

It uses [React Query](https://tanstack.com/query/latest/docs/framework/react/overview) to search for data from a mock API. It has [Debounce](lib/hooks/useDebounce.ts) so that requests wont run too often. It uses [React-Select ](https://react-select.com/home) to allow for easy multi-selected input fields. It uses [Zustand](https://zustand-demo.pmnd.rs/) to "lift the state up" and display the total value outside of the initial component.
And finally it uses [server actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) to send the data to the server and then retrieve the response with the same total value as on the client.

Built with Typescript.

## Instructions

Install the dependencies and run the development server:
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
