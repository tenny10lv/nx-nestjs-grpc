import { Controller } from '@nestjs/common';

import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import { Hero, HeroById } from '@lib-proto';

@Controller('hero')
export class AppController {

    constructor(private readonly appService: AppService) { }

    @GrpcMethod('HeroService')
    findOne(data: HeroById): Hero {
        return this.appService.findOne(data);
    }
}
