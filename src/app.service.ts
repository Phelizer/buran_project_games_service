import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';
import { ROLES } from './models/role.model';

const mockUser = () => ({
  id: '1',
  first_name: 'Bob',
  last_name: 'Brown',
  email: 'bob.brown@gmail.com',
  registration_date: new Date(),
  age: 23,
  sex: 'male' as const,
  roles: [ROLES.USER],
});

@Injectable()
export class AppService {
  async getUsersOfGame(gameID: string): Promise<User[]> {
    return [mockUser(), mockUser()];
  }
}
