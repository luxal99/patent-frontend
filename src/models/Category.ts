export class Category {
    id;
    title;
    listOfSubCategories;

    constructor(title?:string){
        this.title = title;
    }
}