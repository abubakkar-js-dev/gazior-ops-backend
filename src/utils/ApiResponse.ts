export interface IMeta {
  page?: number;
  limit?: number;
  total?: number;
}

export class ApiResponse<T> {
  public readonly success: true;
  public readonly message: string;
  public readonly data: T;
  public readonly meta?: IMeta;

  constructor(message: string, data: T, meta?: IMeta){
    this.success = true;
    this.message = message;
    this.data = data;
    this.meta = meta;
  }


}
