export const handleErrors = (errorResponse, setError) => {
  const errorMessages = {};
  errorResponse.forEach(error => {
    errorMessages[error.path] = error.msg;
  });
  setError(errorMessages);
};
