export const fakeApi = {
    submit: form => new Promise((resolve, reject) => {
        setTimeout(resolve, 500);
    })
}

// fix for redux-form 5.3.1 with react 15.2+ console errors on extra element props
export const domOnlyProps = ({
  initialValue,
  autofill,
  onUpdate,
  valid,
  invalid,
  dirty,
  pristine,
  active,
  touched,
  visited,
  autofilled,
  ...domProps }) => domProps;