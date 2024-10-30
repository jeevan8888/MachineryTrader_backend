export class CreateProductDto {
  readonly name: string;
  readonly price: number;
  readonly description?: string;
  readonly category: string;
  readonly details?: Record<string, any>;
}
