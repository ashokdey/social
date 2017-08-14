const Ashok = {
  name: 'Ashok Dey',
  username: 'ashokdey',
  email:'ashokdey100@gmail.com',
  password: 'ashokdey',
  isVerified: true,
}

// profile of user 
const AshokProfile = {
  bio: 'I am a fun loving Fullstack JS Developer',
  website: 'http://ashokdey.in',
  age: 23,
  images: [{url: 'https://lorem/400/400'}],
  educattion: [{
    type: 'B.Tech',
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
  main: Ashok,
  profile: AshokProfile
};

export  default data;