export class ApiErrorResponse {
  message: string | string[];
  error: string;
  statusCode: number;
}

export class ApiCardResponse {
  card: ArrayBufferLike;
}
