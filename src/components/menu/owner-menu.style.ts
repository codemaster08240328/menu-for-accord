import styled from 'styled-components'
import { Colors, UI, FontSizes } from '../../lib/style-guide'

const OwnerMenuWrapper = styled.div`
  margin: 0 auto;
  background-color: ${Colors.PureWhite};
  border: 1px solid ${Colors.BG1};
  height: fit-content;
  align-self: center;
  ${UI.BORDER_RADIUS_BIG}
  ${UI.MENU_BOX_SHADOW}
`

const SearchInputWrapper = styled.div`
  width: 270px;
  height: 48px;
  padding: 15px 20px;
  border-bottom: 1px solid ${Colors.BG4};

  input:focus {
    outline: none;
    color: ${Colors.TX4};
    ${FontSizes.large}
    line-height: 20px;
  }
`

const OptionWrapper = styled.div`
  display: flex;
  width: 270px;
  height: 40px;
  align-items: center;
  padding: 0 20px;

  background-color: ${(props) =>
    props.defaultChecked ? Colors.BG5 : Colors.PureWhite};

  .user__img {
    margin-left: -10px;
    width: 22px;
    height: 22px;
  }

  .user__name {
    margin-left: 11px;
    ${FontSizes.large}
    line-height: 20px;
    color: ${Colors.TX5};
  }

  .user__role {
    margin-left: 8px;
    ${FontSizes.large}
    line-height: 20px;
    color: ${Colors.TX6};
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.defaultChecked ? Colors.BG5 : Colors.BG3};
  }
`

export { OwnerMenuWrapper, SearchInputWrapper, OptionWrapper }
