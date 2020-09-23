import { Category } from './Category';

export class SubCategory {
    id;
    title;
    idCategory: Category

    constructor(title?: string, idCategory?) {
        this.title = title;
        this.idCategory = idCategory;
    }
}