export class WorkOrder {
    id;
    date:string;
    listOfProducts;

    constructor(date?) {
        this.date = date;
    }
}