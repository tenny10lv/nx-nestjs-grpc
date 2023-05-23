import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { HeroService } from './hero/hero.service';

@Module({
  imports: [],
  controllers: [HeroService],
  providers: [AppService],
})
export class AppModule {}
