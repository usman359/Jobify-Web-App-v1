class CustomErrorAPIError extends Error {
  constructor(message) {
    super(message);
  }
}

export default CustomErrorAPIError;