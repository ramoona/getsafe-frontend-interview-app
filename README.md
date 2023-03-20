# Getsafe Frontend Engineer Coding Challenge
## Solution
This repo provides a solution for a coding challenge described in  [CHALLENGE.md](CHALLENGE.md).

## Available Scripts
```bash
# Runs development server (http://localhost:3000)
> yarn start

# Builds the app for production
> yarn build

# Launches the test runner
> yarn test

# Runs the formatting
> yarn prettier

# Runs linter
> yarn lint

# Runs TS compiler in 'noEmit' mode for types validation
> yarn typecheck
```

## Description
Before starting with the feature development, I prepared the repository a little bit. Because the app is quite small, it didn't take long to do; though in the real world app those kind of changes would be more tricky.
- Updated all dependencies (a good half of them had a major version bump);
- Leveraged CSS Modules for styles isolation;
- Refined a files structure (no keeping everything straight in `src` folder on my watch);
- Replaced default exports with the named ones. In most cases (in the app code, not some framework related components like Next.js pages) default exports don't bring any benefits while having a number of issues. 


The solution implements a `Designer Insurance` buy flow as an addition to the existing `Developer Insurance` flow. The idea was to create a reusable `Buyflow` component to render any flow by a given product ID; hence the first step I took was refactoring the existing `Buyflow` component. As I finished with the refactoring and adding step data validation, it was almost effortless to add a new flow:
1. Add new product ID
2. Add new Full Name step
3. Define steps for `Designer Insurance`
4. Add a link to the home page

This set of steps could be now used for adding any new flow that doesn't introduce branching or other significant changes.

## Assumptions
Some of the assumptions I've made while solving the task:
- A product ID defines the flow steps and their order;
- There is no "branching"; each flow is straightforward;
- The steps can be configured to some extent (e.g. adding min/max for age step or making the step optional);
- `Buyflow` component accepts `onSubmit` handler invoked on the flow completion with all the collected data. This handler would be the place to put a network request sending the data to a server.
- The validation only happens for a slice of data on each step; the full data object is not validated in the Summary step. Assuming in real life the collected data would be sent to the server where it would be validated, I think the client-side validation on this last step would be redundant;
- I added the functionality to go back to the previous step as I believe it is a crucial UI element for a flow like this.

## Improvements
What I would do if I had more time:
- Use custom validation instead of a native one. It goes back to providing a nicer and more consistent UX. For the custom validation, I would use [zod](https://github.com/colinhacks/zod).
- If an optional step were introduced, I would adjust the tests to accommodate for that (currently, the way the tests are written relies on all steps being required).
- UI/UX improvements:
  - Show flow progress;
  - Add Color distinction for main (Next/Purchase) and secondary (Back) actions;
  - On the Summary screen, allow to quickly jump into a certain step to make changes;
  - Persist collected data in `sessionStorage` to re-initialize the flow after a page refresh.



------
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
