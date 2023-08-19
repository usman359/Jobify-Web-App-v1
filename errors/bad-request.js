import { StatusCodes } from "http-status-codes";
import CustomErrorAPIError from "./custom-api.js";

class BadRequestError extends CustomErrorAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}


export default BadRequestError;