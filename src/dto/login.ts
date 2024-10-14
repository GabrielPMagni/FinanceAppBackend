import { ArgsType, Field } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty } from "class-validator";

@ArgsType()
export class LoginArgs {
    @Field(type => String)
    @IsNotEmpty({ message: 'Email é obrigatório' })
    @IsEmail({}, { message: 'Email inválido' })
    email: string;

    @Field(type => String)
    @IsNotEmpty({ message: 'Senha é obrigatória' })
    password: string;
}