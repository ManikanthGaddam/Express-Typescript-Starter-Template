export interface AppError extends Error {
    statusCode : number
}

export class InternalServerError implements AppError {
    statusCode: number;
    message:string;
    name: string;

    constructor(message:string){
        this.statusCode = 500;
        this.message = message;
        this.name = "INTERNAL SERVER ERROR";
    }
}

export class BadRequest implements AppError {
    statusCode: number;
    message:string;
    name: string;

    constructor(message:string) {
        this.statusCode = 400;
        this.message = message;
        this.name = "BAD REQUEST";
    }
}