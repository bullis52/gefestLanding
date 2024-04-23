export interface ErrorResponse {
  data: {
    statusCode: number;
    message: string;
    timestamp: string;
    path: string;
  };
  headers: {
    'content-length': string;
    'content-type': string;
  };
  request: XMLHttpRequest;
  status: number;
  statusText: string;
}
