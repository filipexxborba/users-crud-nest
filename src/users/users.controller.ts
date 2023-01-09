import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './users.service';
import { User } from 'src/models/user.model';

interface UserServiceResponse {
  message: string;
}

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async findUserById(
    @Param('id') id: string,
  ): Promise<User | UserServiceResponse> {
    return this.userService.getUserById(id);
  }

  @Post()
  async createUser(@Body() user: User): Promise<User | UserServiceResponse> {
    return this.userService.createUser(user);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() user: User,
  ): Promise<User | UserServiceResponse> {
    return this.userService.editUser(id, user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<UserServiceResponse> {
    return this.userService.deleteUser(id);
  }
}
