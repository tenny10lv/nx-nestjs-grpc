import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { HeroById, Hero } from '@lib-proto';
import { AppService } from '../app.service';

@Controller()
export class HeroService {

    constructor(private readonly appService: AppService) { }

    @GrpcMethod()
    findOne(data: HeroById): Hero {
        return this.appService.findOne(data);
    }
    
}
