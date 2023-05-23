import { ClientOptions, Transport } from '@nestjs/microservices';
import { heroConfiguration } from '@lib-proto';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: heroConfiguration.url,
    package: heroConfiguration.packageName,
    protoPath: heroConfiguration.protoPath,
  },
};
