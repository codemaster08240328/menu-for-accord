declare const module: { hot: { accept: () => void } }

declare module '*.png' {
  const value: string
  export = value
}

declare module '*.svg' {
  const value: string
  export = value
}

interface IconProps {
  color?: string
  className?: string
  size?: number
  onClick?: () => void
}

type FCProps = { className?: string }
type FC<T = {}> = React.FC<Readonly<T & FCProps>>
