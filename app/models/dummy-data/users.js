  const usersList = [
    {
      name: 'Ashok Dey',
      username: 'ashokdey',
      email:'ashokdey100@gmail.com',
      password: 'ashokdey',
      isVerified: true,
    },
    {
      name: 'Anup Kumar',
      username: 'anupkumar',
      email:'anupkumar@gmail.com',
      password: 'ashokdey',
      isVerified: true,
    },
    {
      name: 'Sachin Kumar',
      username: 'sachinkr',
      email:'sachinkr100@gmail.com',
      password: 'ashokdey',
      isVerified: true,
    },
    {
      name: 'Nikesh Rawani',
      username: 'nikeshcfri',
      email:'nikeshcfri100@gmail.com',
      password: 'ashokdey',
      isVerified: true,
    }
  ];

// profile of user 
const UserProfile = {
  bio: 'I am a fun loving Fullstack JS Developer',
  website: 'http://ashokdey.in',
  age: 23,
  gender: 'Male',
  images: [{url: 'https://lorem/400/400'}],
  education: [{
    educationType: 'B.Tech',
    details: {
      major: 'Computer Science',
      degree: 'Bachelor of Technology',
      start: new Date(),
      end: new Date()
      }
    },
  {
    type: 'High School',
    details: {
      major: 'Science HighSchool',
      degree: 'AISSCE',
      start: new Date(),
      end: new Date(),
    }
  }]
}

const data = {
  users: usersList,
  userProfile: UserProfile
};

export  default data;