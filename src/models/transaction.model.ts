import { Field, Int, ObjectType, Float } from "@nestjs/graphql";
import { CompanyModel } from "./company.model";
import { TransactionType } from "./enum-types/transaction-type";
import { TransactionCategoryModel } from "./transaction-category.model";

@ObjectType()
export class TransactionModel {
    @Field(type => Int)
    id: number;

    @Field(type => String)
    transactionType: TransactionType;

    @Field(type => String)
    description: string;

    @Field(type => Float)
    amount: number;

    @Field(type => String)
    transactionDate: string;

    @Field(type => Int)
    transactionCategoryId: number;

    @Field(type => TransactionCategoryModel)
    transactionCategory: TransactionCategoryModel;

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