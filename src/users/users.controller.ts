import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  /*
    TODO: Implement a controller where only userID in accessToken can get their profile
    @get('me')
    getMe(@Auth('accessToken') accessToken: string) {
      const userID = accessToken['userID'];
      return this.usersService.findUserByPK(userID);
    }
  */

  // TODO: Only admin can access this route
  @Get(':id')
  getUserByPK(@Param('id') userID: number) {
    return this.usersService.findUserByPK(userID)
  }

  // TODO: Only admin can access this route
  @Post()
  createUser(@Body() userDto: any) {
    return this.usersService.createUser(userDto);
  }


  // TODO: Only admin can access this route
  @Delete(':id')
  deleteUser(@Param('id') userID: number) {
    return this.usersService.deleteUser(userID);
  }
}
