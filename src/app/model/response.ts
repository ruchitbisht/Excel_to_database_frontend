import { FileService } from "../service/file.service";

export class Response {
    constructor(private api:FileService){  }
    totalPages:number;
}
