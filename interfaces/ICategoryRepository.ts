import { Category } from "../src/model/Category";

interface ICategoriesRepository {
    findByName(name: string): Category;
    listCategories(): Category[];
    createNewCategory({name, description }: Category): void;
}

export { ICategoriesRepository }