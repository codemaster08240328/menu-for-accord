import React, { useState } from 'react'
import Menu from '../reusable/menu'
import {
  OwnerMenuWrapper,
  SearchInputWrapper,
  OptionWrapper
} from './owner-menu.style'

import { User, getUsers } from '../../lib/owner_menu-util'

import HoldIcon from '../../icons/holdIcon.svg'

interface InputProps {
  value: string
  onChange: (value: string) => void
  onFocus: () => void
}

const Input: FC<InputProps> = ({ value, onChange, onFocus }) => {
  return (
    <SearchInputWrapper>
      <input
        placeholder="Filter by name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => onFocus()}
      />
    </SearchInputWrapper>
  )
}

let isMounted = false

const OwnerMenu: FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [openMenu, setOpenMenu] = useState(false)
  const [isFetching, setIsFetching] = useState(true)
  const [searchName, setSearchName] = useState('')
  const [selectedUser, setSelectedUser] = useState<User | undefined>()

  if (openMenu && !isMounted) {
    getUsers().then((resp) => {
      isMounted = true
      setUsers(resp)
      setIsFetching(false)
    })
  }

  const getFilteredUser = () => {
    return users.filter((item) =>
      item.name.toLowerCase().includes(searchName.toLowerCase())
    )
  }

  const renderOption = (user: User) => {
    return (
      <OptionWrapper defaultChecked={user === selectedUser}>
        <img src={HoldIcon} />
        <img src={user.avatar} className="user__img" />
        <span className="user__name">{user.name}</span>
        <span className="user__role">{user.role}</span>
      </OptionWrapper>
    )
  }

  console.log(selectedUser)

  return (
    <OwnerMenuWrapper>
      <Input
        value={searchName}
        onChange={(value) => setSearchName(value)}
        onFocus={() => setOpenMenu(true)}
      />

      {openMenu && (
        <Menu
          optionRender={(user: User) => renderOption(user)}
          isFetching={isFetching}
          items={getFilteredUser()}
          onChange={(user: User) => setSelectedUser(user)}
          noDataOption={() => (
            <OptionWrapper>There is no user matched.</OptionWrapper>
          )}
        />
      )}
    </OwnerMenuWrapper>
  )
}

export default OwnerMenu
