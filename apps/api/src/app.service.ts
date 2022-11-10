import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getMessages(): object {
    return [{ "id": 1, "text": "message" }];
  }
}
