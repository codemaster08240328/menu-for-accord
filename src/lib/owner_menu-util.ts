import { sleep } from './utils'

import Image1 from '../icons/image_1.png'
import Image2 from '../icons/image_2.png'
import Image3 from '../icons/image_3.png'
import Image4 from '../icons/image_4.png'

export interface User {
  name: string
  role: string
  avatar: string
}

const USER_LIST: User[] = [
  {
    name: 'Ross Rich',
    role: 'Manager',
    avatar: Image1
  },
  {
    name: 'Harry Avery',
    role: 'Associate',
    avatar: Image2
  },
  {
    name: 'Amit Patel',
    role: 'Associate',
    avatar: Image3
  },
  {
    name: 'Suzy Anderson',
    role: 'Associate',
    avatar: Image4
  }
]

export const getUsers = async () => {
  await sleep(1000)
  return USER_LIST
}
