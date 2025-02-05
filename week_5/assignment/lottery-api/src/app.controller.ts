import { Controller, Body, Patch, Post } from '@nestjs/common';
import { memoryUsage } from 'process';
import { AppService } from './app.service';
import { StartLotteryDto } from './dtos/startLottery.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("start-lottery")
  startLottery(
    @Body() body: StartLotteryDto
    ) {
    this.appService.startLottery(body);
  }

  @Post("close-bets")
  closeLottery() {
    return this.appService.closeLottery();
  }
}
