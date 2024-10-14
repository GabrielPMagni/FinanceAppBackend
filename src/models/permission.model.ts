import { Field, Int, ObjectType } from "@nestjs/graphql";
import { RoleModel } from "./role.model";

@ObjectType()
export class PermissionModel {
    @Field(type => Int)
    id: number;

    @Field(type => String)
    permission: string;

    @Field(type => [RoleModel])
    roles: RoleModel[];

    @Field(type => String)
    createdAt: string;
}