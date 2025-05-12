import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {
  private users = [
    {
      id: '1',
      name: 'Boolean',
      email: 'bobo@gmail.com',
      age: 22,
      role: 'ADMIN'
    },
    {
      id:
        '2',
      name: 'Boolean Bo',
      email: 'bobo@gmail.com', age: 22,
      role: 'MEMBER'
    },
    {
      id: '3',
      name: 'Bo Bo',
      email: 'bobo@gmail.com', age: 22,
      role: 'MEMBER'
    },
    {
      id: '4',
      name: 'Bo Bo Aung',
      email: 'bobo@gmail.com', age: 22,
      role: 'MEMBER'
    },
    {
      id: '5',
      name: 'Admin',
      email: 'bobo@gmail.com', age: 22,
      role: 'ADMIN'
    },

  ]

  findAll(role?: 'ADMIN' | 'MEMBER') {
    if (role) {
      return this.users.filter(user => user.role === role)
    }
    return this.users
  }

  findOne(id: string) {
    const user = this.users.find(user => user.id === id)
    if (!user) throw new NotFoundException('user not found')
    return user
  }

  create(CreateUserDto: CreateUserDto) {
    const usersByHighestId = [...this.users].sort((a, b) => parseInt(b.id) - parseInt(a.id))
    const newId = parseInt(usersByHighestId[0].id) + 1
    const newUser = {
      id: newId.toString(),
      ...CreateUserDto
    }

    this.users.push(newUser)
    return newUser
  }

  update(id: string, UpdateUserDto: UpdateUserDto
  ) {
    const userIndex = this.users.findIndex(user => user.id === id)
    this.users[userIndex] = {
      ...this.users[userIndex],
      ...UpdateUserDto
    }
    return this.users[userIndex]


  }

  delete(id: string) {
    const removedUser = this.users.find(user => user.id === id)
    this.users = this.users.filter(user => user.id !== id)
    return removedUser
  }


}
