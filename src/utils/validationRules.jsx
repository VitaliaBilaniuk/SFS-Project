const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = 'Name is required';
  } else if (values.name.length < 4) {
    errors.name = 'Name must be 5 or more characters';
  }

  if (!values.position) {
    errors.position = 'Position is required';
  } else if (values.position.length < 4) {
    errors.position = 'Position must be 5 or more characters';
  }

  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  return errors;
};

export default validate;
