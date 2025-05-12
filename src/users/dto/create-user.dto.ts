import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;


  @IsEmail()
  email: string;

  @IsNumber()
  age: number;

  @IsEnum(['MEMBER', 'ADMIN'], {
    message: 'role must be MEMBER or ADMIN'
  })
  role: 'MEMBER' | 'ADMIN';

}