# Simple Interest Calculator

## Technology Choices

I am using the official [Redux Toolkit package](https://redux-toolkit.js.org), with the Redux CRA preset. This makes a lot of the typical Redux biolerplate unnecessary and skips the `connect` HoC in favor of `useSelector` and `useDispatch` hooks.

I am also using [React Hook Form](https://react-hook-form.com) to simplify form state management in a hooks-friendly way.

## Project Structure

I followed the conventions in the CRA preset. I like this domain-driven organization, because it makes scaling apps and potentially adopting microfrontends much cleaner.

## Tests

I wanted to demonstrate a few different types of tests, without going too deep into test cases for an exercise.

`calculateSimpleInterest.spec.js` contains table-driven tests for the calculation using Jest's built in `test.each` method.

`App.spec.js` contains a basic component test using React Testing Library

`SimpleInterestForm.spec.js` uses React Testing Library to validate that the function passed to `onSubmit` is called when the user clicks the submit button.

`simpleInterestSlice.spec.js` contains basic Redux tests that validate initial state and each action. Because the calculation itself is tested elsewhere, we don't need to retest here.

## Instructions

First run

```
$ yarn install
```

Then, to run tests

```
$ yarn test --watchAll=false
```

Or, to run the app in dev mode

```
$ yarn start
```
