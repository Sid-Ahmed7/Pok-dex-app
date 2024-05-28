export class Pokemon {
    name: string;
    imageUrl: string;
    description: string;
    types: string[];

    constructor(name: string, imageUrl: string, description: string, types: string[]) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.description = description;
        this.types = types;
    }
}
