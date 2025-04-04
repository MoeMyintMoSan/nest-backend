import { Body,Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() user:User){
        return this.usersService.create(user);
    }

    @Get()
    async findAll(){
        return this.usersService.findAll();
    }

}
