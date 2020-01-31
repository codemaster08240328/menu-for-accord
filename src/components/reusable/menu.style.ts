import styled from 'styled-components'

const MenuWrapper = styled.div`
  padding: 10px 0;
  transform-origin: top;

  &.open--menu {
    display: block;
    animation: fade-in 0.5s;
  }

  &.close--menu {
    display: none;
    animation: fade-out 0.5s;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`

const LoaderWrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
`
const SpinnerWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 24px;
  height: 24px;
  margin-right: 10px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 24px;
    height: 24px;
    margin-right: 10px;
    border: 2px solid #000;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #000 transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }

  div:nth-child(2) {
    animation-delay: -0.3s;
  }

  div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export { MenuWrapper, LoaderWrapper, SpinnerWrapper }
