import { Field, Int, ObjectType } from "@nestjs/graphql";
import { CompanyModel } from "./company.model";
import { TransactionModel } from "./transaction.model";

@ObjectType()
export class TransactionCategoryModel {
    @Field(type => Int)
    id: number;

    @Field(type => String)
    categoryName: string;

    @Field(type => Int)
    companyId: number;

    @Field(type => CompanyModel)
    company: CompanyModel;

    @Field(type => [TransactionModel])
    transactions: TransactionModel[];

    @Field(type => String)
    createdAt: string;

    @Field(type => String)
    updatedAt: string;

    @Field(type => String, { nullable: true })
    deletedAt?: string;
}