import React from 'react'
import { MenuWrapper, LoaderWrapper, SpinnerWrapper } from './menu.style'

interface Props<T> {
  items: T[]
  isFetching: boolean
  openMenu: boolean
  onChange: (item: T) => void
  optionRender: (item: T) => JSX.Element
  noDataOption: () => JSX.Element
}

// eslint-disable-next-line
type IMenu<T = any> = FC<Props<T>>

const SpinnerComponent = () => (
  <SpinnerWrapper>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </SpinnerWrapper>
)

const Menu: IMenu = ({
  items,
  isFetching,
  onChange,
  optionRender,
  noDataOption,
  openMenu
}) => {
  console.log(openMenu)
  return (
    <MenuWrapper className={openMenu ? 'open--menu' : 'close--menu'}>
      {isFetching && (
        <LoaderWrapper>
          <SpinnerComponent />
          Fetching options...
        </LoaderWrapper>
      )}
      {!isFetching &&
        !!items.length &&
        items.map((item, index) => (
          <div key={index.toString()} onClick={() => onChange(item)}>
            {optionRender(item)}
          </div>
        ))}
      {!isFetching && items.length === 0 && noDataOption()}
    </MenuWrapper>
  )
}

export default Menu
