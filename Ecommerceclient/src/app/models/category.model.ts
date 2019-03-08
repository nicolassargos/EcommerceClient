export class Category {
    id: number;
    name: string;
    subCategories?: Array<Category>;
}