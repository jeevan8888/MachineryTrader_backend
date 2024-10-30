export class CreateCategoryDto {
  readonly name: string;
  readonly subCategories?: string[];
  readonly description: string;
}
