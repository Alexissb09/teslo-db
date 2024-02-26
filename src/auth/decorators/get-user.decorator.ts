import {
  ExecutionContext,
  InternalServerErrorException,
  createParamDecorator,
} from '@nestjs/common';
import { User } from '../entities/user.entity';

export const GetUser = createParamDecorator((data, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest();

  const user: User = req.user;

  if (!user) throw new InternalServerErrorException('User not found ');

  return data ? user[data] : user;
});