import React, { useState, useEffect, useRef } from 'react'
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

const OwnerMenu: FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [openMenu, setOpenMenu] = useState(false)
  const [isFetching, setIsFetching] = useState(true)
  const [searchName, setSearchName] = useState('')
  const [selectedUser, setSelectedUser] = useState<User | undefined>()

  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef &&
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setOpenMenu(false)
    }
  }

  useEffect(() => {
    if (openMenu) {
      getUsers().then((resp) => {
        setUsers(resp)
        setIsFetching(false)
      })
    }

    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [openMenu])

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
    <OwnerMenuWrapper ref={wrapperRef}>
      <Input
        value={searchName}
        onChange={(value) => setSearchName(value)}
        onFocus={() => setOpenMenu(true)}
      />
      <Menu
        openMenu={openMenu}
        optionRender={(user: User) => renderOption(user)}
        isFetching={isFetching}
        items={getFilteredUser()}
        onChange={(user: User) => setSelectedUser(user)}
        noDataOption={() => (
          <OptionWrapper>There is no user matched.</OptionWrapper>
        )}
      />
    </OwnerMenuWrapper>
  )
}

export default OwnerMenu
