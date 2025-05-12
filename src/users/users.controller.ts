import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {


  constructor(private readonly usersService: UsersService) { }

  @Get()
  findAll(@Query('role') role?: 'ADMIN' | 'MEMBER') {
    return this.usersService.findAll(role)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id)
  }

  @Post()
  create(@Body(ValidationPipe) CreateUserDto: CreateUserDto) {
    return this.usersService.create(CreateUserDto)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body(ValidationPipe) UpdateUserDto: UpdateUserDto) {
    return { id, ...UpdateUserDto }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return { id }
  }
}
