import { Field, Int, ObjectType } from "@nestjs/graphql";
import { CompanyModel } from "./company.model";
import { UserModel } from "./user.model";

@ObjectType()
export class UserCompanyModel {
    @Field(type => Int)
    userId: number;

    @Field(type => UserModel)
    user: UserModel;

    @Field(type => Int)
    companyId: number;

    @Field(type => CompanyModel)
    company: CompanyModel;

    @Field(type => String)
    createdAt: string;

    @Field(type => String)
    updatedAt: string;

    @Field(type => String, { nullable: true })
    deletedAt?: string;
}