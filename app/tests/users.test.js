import mongoose from 'mongoose';
import expect  from 'expect';
import Users from '../models/User';

/**
 * create a hook to empty the Database berfore 
 * running any  test 
 * empty the DB again after the tests are complete
 */

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    done();
  });
});

describe('Creating Users', () => {
  it('Should save a user',(done)=> {
    // create a user 
    const john = new Users({
      name: 'Jhon Doe',
      username: 'jhondoe',
      email:'jhondoe@gmail.com',
      password: 'jhondoe'
    });
    
    john.save().then((data) => {
      expect(john.isNew).toBeFalsy();
      done();
    });   
  });

  
});


