import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaModule } from './components/prisma/prisma.module';
import { UserModule } from './components/user/user.module';
import { AppResolver } from './app.resolver';
import { join } from 'path';
import { AuthModule } from './components/auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    formatError: (error) => {
      console.error('---- Internal failure ----');
      console.log(typeof error);
      console.error(error);
  
      return {
        message: error.message,
        timestamp: new Date().toISOString(),
      }
    },
  }),
  ConfigModule,
  PrismaModule,
  UserModule,
  AuthModule,
  ],
  providers: [AppService, AppResolver],
})
export class AppModule {}
