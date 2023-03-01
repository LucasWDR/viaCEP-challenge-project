import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddressModule } from './domain/address/address.module';

@Module({
  imports: [
    AddressModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
