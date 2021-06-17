import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Simon Gusev',
    email: 'simon@example.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    name: 'Alexander Picolo',
    email: 'alex@example.com',
    password: bcrypt.hashSync('123456', 10)
  }
]

export default users