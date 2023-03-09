import { ApiProperty } from "@nestjs/swagger";


export class UserDTO {

     id?: string;

     @ApiProperty({ description: 'User name', example: 'Jhon Doe' })
    readonly name: string;

    @ApiProperty()
    readonly password: string;

    constructor(id: string, name: string, password: string) {

        this.id = id;
        this.name = name;
        this.password=password;
    }
}
