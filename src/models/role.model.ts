import { Field, Int, ObjectType } from "@nestjs/graphql";
import { CompanyModel } from "./company.model";
import { PermissionModel } from "./permission.model";

@ObjectType()
export class RoleModel {
    @Field(type => Int)
    id: number;

    @Field(type => String)
    roleName: string;

    @Field(type => [PermissionModel])
    permissions: PermissionModel[];

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