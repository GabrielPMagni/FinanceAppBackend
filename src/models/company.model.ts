import { Field, Int, ObjectType } from "@nestjs/graphql";
import { UserModel } from "./user.model";
import { TransactionModel } from "./transaction.model";
import { ClientModel } from "./client.model";
import { RoleModel } from "./role.model";

@ObjectType()
export class CompanyModel {
    @Field(type => Int)
    id: number;

    @Field(type => String)
    companyName: string;

    @Field(type => String)
    cnpj: string;

    @Field(type => String)
    address: string;

    @Field(type => Int)
    userId: number;

    @Field(type => UserModel)
    user: UserModel;

    @Field(type => [TransactionModel])
    transactions: TransactionModel[];

    @Field(type => [ClientModel])
    clients: ClientModel[];

    @Field(type => [RoleModel])
    roles: RoleModel[];

    @Field(type => String)
    createdAt: string;

    @Field(type => String)
    updatedAt: string;

    @Field(type => String, { nullable: true })
    deletedAt?: string;
}