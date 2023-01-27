import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { MoviesService } from 'src/movies/services/movies/movies.service';
import { QRCodeService } from 'src/qrcode/services/qrcode.service';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  @Cron(CronExpression.EVERY_10_SECONDS)
  handleCron() {
    new QRCodeService().generateQRCode()
    new MoviesService().generateMovies()
    this.logger.debug('Called every 30 seconds');
  }
}
