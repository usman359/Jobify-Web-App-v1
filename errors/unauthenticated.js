import { StatusCodes } from "http-status-codes";
import CustomErrorAPIError from "./custom-api.js";

class UnAuthenticatedError extends CustomErrorAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default UnAuthenticatedError;