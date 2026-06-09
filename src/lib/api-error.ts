export type ApiErrorBody = {
  error?: string;
  errors?: Record<string, string>;
};

export class ApiError extends Error {
  readonly status: number;
  readonly body: ApiErrorBody;

  constructor(status: number, body: ApiErrorBody) {
    super(ApiError.getMessageFromBody(body));
    this.name = "ApiError";
    this.status = status;
    this.body = body;
  }

  static getMessageFromBody(body: ApiErrorBody): string {
    if (body.error) {
      return body.error;
    }

    if (body.errors) {
      return Object.entries(body.errors)
        .map(([field, message]) => `${field}: ${message}`)
        .join("; ");
    }

    return "Something went wrong. Please try again.";
  }

  getMessage(): string {
    return ApiError.getMessageFromBody(this.body);
  }
}
