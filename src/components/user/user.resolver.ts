import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserCreateArgs, UserRequestArgs, UserResponseDto } from 'src/dto/user';
import { plainToInstance } from 'class-transformer';
import { UserModel } from 'src/models/user.model';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/auth.guard';

@Resolver(of => UserModel)
export class UserResolver {
    constructor(
        private readonly userService: UserService,
    ) {}

    @Query(returns => UserModel)
    @UseGuards(JwtAuthGuard)
    async user(@Args() { id }: UserRequestArgs) {
        return plainToInstance(UserResponseDto, await this.userService.getUser(id));
    }

    @Mutation(returns => UserModel)
    async createUser(@Args() args: UserCreateArgs) {
        return plainToInstance(UserResponseDto, await this.userService.createUser(args));
    }
}
