# Overview

This project was created to solve a Technical Assignment to demonstrate my utilization of React + Redux Tools + TypeScript + API skills.

[Live demo](https://bespoke-nougat-9ebfc9.netlify.app/)


## Prerequisites
- React `^18.3.1`
- React Router Dom `^6.26.2`
- Axios `^1.7.7`
- Typescript `^4.9.5`
- ReduxJS Toolkit `^2.2.7`

# Project 

## Frontend

### Reusables
The frontend has reusable components: `Footer.tsx` and `Header.tsx` which can be reused on any page.

### Pages
- `Home.tsx`. This is the main page which shows the table, implements the dynamic search functionality using states and uses Redux to fetch and display all users in the Table.

## Backend

### API
- The backend uses `JSONPlaceholder` API in the `src/services/api.ts` file. It fetches a total of 10 users which is then forwarded to our Redux slice.

## Redux 

### Store
Our `store.ts` script in `/src/app/store.ts` directory is our primary Redux store. It configures the Users and dispatches necessary states caught by our hook.

### User slice
- `userSlice.ts` in `/src/features/users/userSlice.ts` directory is used to give shape to the Users data we fetch asynchronously via our API. It then creates and exports a slice which is used in `/src/app/store.ts`.

## Hooks

We have a hook which we are using in `Home.tsx`. It is responsible for exporting typed versions of `useDispatch` and `useSelector` Redux `store.ts`.

# Conclusion

The project was completed on Sept 10 2024. No licenses are applied.