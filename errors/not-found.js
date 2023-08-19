import { StatusCodes } from "http-status-codes";
import CustomErrorAPIError from "./custom-api.js";

class NotFoundError extends CustomErrorAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export default NotFoundError;