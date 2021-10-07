import { v4 as uuidv4 } from "uuid";
import { ICategoriesRepository } from "../../interfaces/ICategoryRepository";
import { ICreateCategoryDTO } from "../../interfaces/ICreateCategoryDTO";
import { Category } from "../model/Category";

class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    createNewCategory({ name, description }: ICreateCategoryDTO): void {
        const newCategory = new Category();
        const categoryId = uuidv4();
        const creatadAt = new Date();

        Object.assign(newCategory, {
            id: categoryId,
            name,
            description,
            created_at: creatadAt
        });

        this.categories.push(newCategory);
    }

    listCategories(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        const categoryFound = this.categories.find(
            (category) => category.name === name
        );

        return categoryFound;
    }
}

export { CategoriesRepository };
