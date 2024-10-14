import { Field, Int, ObjectType } from "@nestjs/graphql";
import { CompanyModel } from "./company.model";

@ObjectType()
export class ClientModel {
    @Field(type => Int)
    id: number;

    @Field(type => String)
    clientName: string;

    @Field(type => String)
    clientEmail: string;

    @Field(type => String)
    clientPhone: string;

    @Field(type => String)
    clientAddress: string;

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