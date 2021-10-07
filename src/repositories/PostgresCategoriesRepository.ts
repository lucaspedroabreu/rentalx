import { ICategoriesRepository } from "../../interfaces/ICategoryRepository";
import { ICreateCategoryDTO } from "../../interfaces/ICreateCategoryDTO";
import { Category } from "../model/Category";

class PostgresCategoriesRepository implements ICategoriesRepository {
    findByName(name: string): Category {
        console.log(name)

        return null;

        throw new Error("Method not implemented.");
    }
    listCategories(): Category[] {

        return null;

        throw new Error("Method not implemented.");
    }
    createNewCategory({ name, description }: ICreateCategoryDTO): void {
        console.log(name, description)

        throw new Error("Method not implemented.");
    }

}

export { PostgresCategoriesRepository }