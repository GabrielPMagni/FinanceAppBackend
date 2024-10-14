import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginArgs } from 'src/dto/login';
import { FinanceException } from 'src/helpers/exception/exception';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => String)
  async login(
    @Args() { email, password }: LoginArgs,
  ): Promise<string> {
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new FinanceException('Credenciais inválidas');
    }
    return (await this.authService.login(user)).access_token;
  }

  @Mutation(() => String)
  async refreshToken(
    @Args('token') token: string,
  ): Promise<string> {
    return this.authService.refreshToken(token);
  }
}