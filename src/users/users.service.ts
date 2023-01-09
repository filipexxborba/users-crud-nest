import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user.model';

@Injectable()
export class UserService {
  users: User[] = [
    {
      id: '1',
      name: 'Filipe',
      age: 21,
      email: 'filipe@gmail.com',
    },
  ];

  getAllUsers() {
    return this.users;
  }

  getUserById(id: string) {
    const user = this.users.find((user) => user.id.toString() === id);
    if (user) return user;
    else
      return { message: `Não foi encontrado nenhum usuário com a id: ${id}` };
  }

  createUser(user: User) {
    if (user) {
      this.users.push(user);
      return user;
    } else
      return {
        message: 'Estão faltando alguns parâmetros, favor valide novamente.',
      };
  }

  editUser(id: string, user: User) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex) {
      this.users[userIndex] = user;
      return user;
    } else
      return { message: `Não foi encontrado nenhum usuário com a id: ${id}` };
  }

  deleteUser(id: string) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex) {
      this.users.splice(userIndex, 1);
      return { message: `Usuário com o ID: ${id} excluído` };
    } else
      return { message: `Não foi encontrado nenhum usuário com a id: ${id}` };
  }
}
