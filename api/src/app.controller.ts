import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { AppService, SkillDto } from './app.service';

@Controller('skill')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getSkills(): object {
    return this.appService.getSkills();
  }

  @Post()
  addSkill(@Body() skill: SkillDto) {
    return this.appService.addSkill(skill);
  }

  @Delete()
  async deleteSkill(@Query() id: string) {
    return this.appService.deleteSkill(id);
  }
}
