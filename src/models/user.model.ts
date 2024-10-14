import { Field, Int, ObjectType } from "@nestjs/graphql";
import { CompanyModel } from "./company.model";

@ObjectType()
export class UserModel {
    @Field(type => Int)
    id: number;

    @Field(type => String)
    name: string;

    @Field(type => String)
    email: string;

    @Field(type => String)
    password: string;

    @Field(type => String)
    phone: string;

    @Field(type => CompanyModel)
    companies: CompanyModel[];

    @Field(type => String)
    createdAt: string;

    @Field(type => String)
    updatedAt: string;

    @Field(type => String, { nullable: true })
    deletedAt?: string;
}