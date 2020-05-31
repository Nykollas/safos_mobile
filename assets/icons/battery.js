import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {

  const { fill } = props;

  return (
    <Svg  viewBox="0 0 28 27" fill="none" {...props}>
      <Path
        d="M17.71 4.369h-1.887V2.184h-4.52V4.37H9.414c-.825 0-1.503.655-1.503 1.453v16.743c0 .809.678 1.464 1.503 1.464h8.284c.837 0 1.515-.655 1.515-1.453V5.822c0-.798-.678-1.453-1.503-1.453z"
        fill={fill}
      />
    </Svg>
  )
}

export default SvgComponent
