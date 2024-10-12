# React Router Demo

## Description

A demo website to play with React Router (v6+) features.

## Tech Stack

- React
- Vite for build tool
- [React Router][1]

## What I learnt

- Configuring routes with `createBrowserRouter` in objects with children arrays
- Layouts within layouts, to create specific sub-page(s) layout components
- using loader functions associated with a route to simulate API calls for components, then display that data using `useLoaderData`
- Creating bespoke error elements for certain pages or routes
- Using `useParam` to navigate to and display pages based on a id given by a fake JSON server
- Using `useLocation` to create breadcrumbs and indicate status within routes
- Using the `Form` and associated action function to deal with form submissions
- Incorporate `lazy` and `suspense` to render loading states whilst pages render

## Todo list

- [ ] [Using defer][2] to deal with suspense and skeleton/loading states

[1]: https://reactrouter.com/en/main
[2]: https://reactrouter.com/en/main/start/overview#skeleton-ui-with-suspense
