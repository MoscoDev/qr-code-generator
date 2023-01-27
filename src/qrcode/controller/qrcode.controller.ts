import { Controller, Get } from '@nestjs/common';
import { QRCodeService } from '../services/qrcode.service';

@Controller("/qr")
export class QRCodeController {
  constructor(private readonly qrCodeService: QRCodeService) {}

  @Get('/generate')
  async generateQRCode() {
    return await this.qrCodeService.generateQRCode();
  }

  @Get('/')
  async getMovies() {
    return this.qrCodeService.getQRCode();
  }
}
