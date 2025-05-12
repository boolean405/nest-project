import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {

  @Get()
  findAll(@Query('name') name?: 'Bo Bo' | 'Boolean') { 
    return [name]
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id }
  }

  @Post()
  create(@Body() user: {}) {
    return user
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return { id }
  }
}
