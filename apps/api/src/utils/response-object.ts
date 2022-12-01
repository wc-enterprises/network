export interface IResponseObject {
  status: 'SUCCESS' | 'ERROR';
  message: string;
  data: any;
  warnings: any[];
}

export function ResponseObj(
  status: 'SUCCESS' | 'ERROR',
  message: string,
  data?: any,
  warnings?: any[],
): IResponseObject {
  return {
    status,
    message,
    data,
    warnings,
  };
}
