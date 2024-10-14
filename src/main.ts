import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CatcherFilter } from './helpers/catcher/catcher.filter';
import { constants } from './components/config/constants';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  for (const key in constants) {
    if (constants[key] === undefined) {
      console.error(`Variável de ambiente ausente: ${key}`);
      process.exit(1);
    }
  }

  app.enableCors();
  app.useGlobalFilters(new CatcherFilter());

  await app.listen(constants.PORT);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
