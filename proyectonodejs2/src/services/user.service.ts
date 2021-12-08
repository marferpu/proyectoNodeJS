import {HttpErrors} from '@loopback/rest';
import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {UserService} from '@loopback/authentication';
//import {User} from '@loopback/authentication-jwt';
import {User} from '../models/user.model';
import {Credentials, UserRepository} from '../repositories';
import {repository} from '@loopback/repository';
import {UserProfile} from '@loopback/security';
import {inject} from '@loopback/context';

@injectable({scope: BindingScope.TRANSIENT})
export class MyUserServiceService implements UserService<User,Credentials>{
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) {}

  async verifyCredentials(credentials:Credentials): Promise<User> {
    const invalidCredentialsError = 'Invalid email or password.';

    const foundUser = await this.userRepository.findOne({
      where: {email: credentials.email},
    });
    if (!foundUser) {
      throw new HttpErrors.Unauthorized(invalidCredentialsError);
    }
    return foundUser;

  }

  convertToUserProfile(user: User): UserProfile {
    throw new Error('Method not implemented.');
  }

  /*
   * Add service methods here
   */
}
