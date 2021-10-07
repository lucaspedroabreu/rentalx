import { ICreateCategoryDTO } from "../interfaces/ICreateCategoryDTO";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

class CreateCategoryService {
    constructor(private categoriesRepository: CategoriesRepository) {}

    execute({ name, description }: ICreateCategoryDTO): void {
        const isCategoryNameRegistred =
            this.categoriesRepository.findByName(name);

        if (isCategoryNameRegistred)
            throw new Error(
                `Category with name ${isCategoryNameRegistred} is already registred`
            );

        this.categoriesRepository.createNewCategory({ name, description });
    }
}

export { CreateCategoryService };
