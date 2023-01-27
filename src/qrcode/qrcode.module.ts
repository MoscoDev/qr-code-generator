import { Module } from '@nestjs/common';
import { QRCodeController } from './controller/qrcode.controller';
import { QRCodeService } from './services/qrcode.service';

@Module({
  controllers: [QRCodeController],
  providers: [QRCodeService],
})
export class QrcodeModule {}
