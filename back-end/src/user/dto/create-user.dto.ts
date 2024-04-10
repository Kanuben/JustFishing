import { IsString, MinLength, IsNotEmpty, IsAlphanumeric, IsEmail, Matches } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(3, { message: 'Username must have atleast 3 characters.' })
    @IsAlphanumeric(null, {
      message: 'Username does not allow other than alpha numeric chars.',
    })
    username: string;
  
    @IsNotEmpty()
    @IsEmail(null, { message: 'Please provide valid Email.' })
    email: string;
  
    @IsNotEmpty()
    // @Matches(passwordRegEx, {
    //   message: `Password must contain Minimum 8 and maximum 20 characters, 
    //   at least one uppercase letter, 
    //   one lowercase letter, 
    //   one number and 
    //   one special character`,
    // })
    password: string;
}
