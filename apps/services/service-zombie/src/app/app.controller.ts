import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import { ZombieById } from './interfaces/zombie-by-id.interface';
import { Zombie } from './interfaces/zombie.interface';

@Controller('zombie')
export class AppController {

    constructor(private readonly appService: AppService) { }

    @GrpcMethod('ZombieService')
    findOne(data: ZombieById): Zombie {
        return this.appService.findOne(data);
    }
}
