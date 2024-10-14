import { ArgumentsHost, Catch } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';

@Catch()
export class CatcherFilter<T> implements GqlExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    return exception;
  }
}
