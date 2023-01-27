import { Module } from '@nestjs/common';
import { QRCodeController } from './qrcode/controller/qrcode.controller';
import { QrcodeModule } from './qrcode/qrcode.module';
import { TasksService } from './tasks/tasks.service';
import { MoviesModule } from './movies/movies.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot(),QrcodeModule, MoviesModule],
  controllers: [],
  providers: [TasksService,],
})
export class AppModule {}
