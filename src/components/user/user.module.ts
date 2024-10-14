import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaModule } from '../prisma/prisma.module';
import { UserResolver } from './user.resolver';

@Module({
    imports: [PrismaModule],
    controllers: [],
    providers: [UserService, UserResolver],
    exports: [],
})
export class UserModule {}
