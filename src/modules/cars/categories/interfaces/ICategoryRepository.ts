import { Category } from "../model/Category";
import { ICreateCategoryDTO } from "../interfaces/ICreateCategoryDTO";

interface ICategoriesRepository {
    findByName(name: string): Category;
    listCategories(): Category[];
    createNewCategory({name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository }