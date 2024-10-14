import { ArgsType, Field } from "@nestjs/graphql";
import { Exclude } from "class-transformer";
import { IsNotEmpty, IsPositive } from "class-validator";
import { UserModel } from "src/models/user.model";

export class UserResponseDto extends UserModel {
    @Exclude()
    password: string;
}

@ArgsType()
export class UserRequestArgs {
    @IsNotEmpty({ message: 'Id é obrigatório' })
    @IsPositive({ message: 'Id deve ser um número positivo' })
    @Field(type => Number)
    id: number;
}

@ArgsType()
export class UserCreateArgs implements Partial<UserModel> {
    @IsNotEmpty({ message: 'Nome é obrigatório' })
    @Field(type => String)
    name: string;

    @IsNotEmpty({ message: 'Email é obrigatório' })
    @Field(type => String)
    email: string;

    @IsNotEmpty({ message: 'Senha é obrigatória' })
    @Field(type => String)
    password: string;

    @Field(type => String, { nullable: true })
    phone?: string;
}