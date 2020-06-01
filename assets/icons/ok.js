import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 26 20" fill="none" {...props}>
      <Path
        d="M8.75 15.95L2.8 10 .816 11.983l7.934 7.934 17-17L23.766.933 8.75 15.95z"
        fill="#00BFA7"
      />
    </Svg>
  )
}

export default SvgComponent
