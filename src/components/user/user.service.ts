import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { FinanceException } from 'src/helpers/exception/exception';
import { UserCreateArgs } from 'src/dto/user';
import { hash } from 'src/helpers/encryption/hash';

@Injectable()
export class UserService {
    constructor(
        private readonly prismaService: PrismaService,
    ) {}

    async getUser(id: number): Promise<User> {
        try {
            return await this.prismaService.user.findUniqueOrThrow({
                where: {
                    id,
                    deletedAt: null,
                }
            })
        } catch (error) {
            throw new FinanceException('Usuário não encontrado');
        }
    }

    async createUser(data: UserCreateArgs): Promise<User> {
        const hashedPassword = await hash(data.password);
        return await this.prismaService.user.create({
            data: {
                name: data.name,
                email: data.email,
                phone: data.phone,
                password: hashedPassword,
            }
        })
    }
}
