import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {

  const { fill } = props;
  return (
    <Svg  viewBox="0 0 10 12" fill="none" {...props}>
      <Path d="M.5 11.25h3V.75h-3v10.5zm6-10.5v10.5h3V.75h-3z" fill={fill} />
    </Svg>
  )
}

export default SvgComponent