import { Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode'
import * as dotenv from 'dotenv';
import * as NodeCache from 'node-cache';
dotenv.config()
const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

const opt = {
  errorCorrectionLevel: 'H',
  type: 'image/png',

  margin: 1,
  color: {
    dark: '#000',
    light: '#FFF',
  },
};

@Injectable()
export class QRCodeService {
  async generateQRCode() {
   
    let qrImage = await QRCode.toDataURL(
      process.env.CLIENT_URL,
      opt,
    );
     myCache.set('qrCode', qrImage, 10000);
    // console.log(myCache.get('qrCode'));
  }

async getQRCode(){
    try {
       let QrCodeValue: string = myCache.get('qrImage');
       console.log(QrCodeValue)
        if (QrCodeValue == undefined) {
          // handle miss!
          QrCodeValue = await QRCode.toDataURL(process.env.CLIENT_URL, opt);
        }
        return QrCodeValue
    } catch (error) {
        
    }
}
}
