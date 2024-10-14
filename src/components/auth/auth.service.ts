import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'src/helpers/encryption/compare';
import { PrismaService } from '../prisma/prisma.service';
import { constants } from '../config/constants';
import { FinanceException } from 'src/helpers/exception/exception';
import { UserModel } from 'src/models/user.model';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly prismaService: PrismaService,
    ) { }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.prismaService.user.findUnique({
            where: {
                email,
                deletedAt: null,
            }
        });

        if (user && await compare(password, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: UserModel) {
        const payload = { 
            email: user.email, 
            sub: user.id, 
            refreshTimeout: this.getRefreshTimeout(),
        };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    refreshToken(token: string) {
        const payload = this.jwtService.decode(token);
        if (payload.refreshTimeout < new Date().getTime()) {
            throw new FinanceException('Token expirado');
        }
        payload.refreshTimeout = this.getRefreshTimeout();
        return this.jwtService.sign(payload);
    }

    private getRefreshTimeout() {
        return new Date().getTime() + constants.JWT_REFRESH_TIMEOUT;
    }
}