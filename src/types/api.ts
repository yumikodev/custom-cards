export class ApiErrorResponse {
  message: string | string[];
  error: string;
  statusCode: number;
}

export class ApiCardResponse<T extends string | Buffer = string> {
  card: T;
  mimetype: string;
}
