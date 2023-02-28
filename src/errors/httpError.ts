abstract class BaseHTTPError extends Error {
    statuscode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statuscode = statusCode;
    }
}

export default BaseHTTPError;