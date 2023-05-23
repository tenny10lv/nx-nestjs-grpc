import { Transport, ClientOptions } from "@nestjs/microservices";
import { heroConfiguration } from '@lib-proto'

export const heroServiceConfigurations: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        url: heroConfiguration.url,
        package: heroConfiguration.packageName,
        protoPath: heroConfiguration.protoPath,
    },
}

