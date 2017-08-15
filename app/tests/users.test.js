
import expect  from 'expect';
import Users from '../models/User';
import db from '../db/db';

describe('Creating Users', () => {
  it('Should save a user',()=> {
    // create a user 
    const john = new Users({
      name: 'Jhon Doe',
      username: 'jhondoe',
      email:'jhondoe@gmail.com',
      password: 'jhondoe',
      isVerified: true
    });
    
    john.save().then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });    

  });
});


