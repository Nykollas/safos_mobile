import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {

  const { fill } = props;

  return (
    <Svg  viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-5 0h-2v-2h2v2zm0-4h-2V8h2v4zm-1 10c1.1 0 2-.9 2-2h-4a2 2 0 002 2z"
        fill={fill}
      />
    </Svg>
  )
}

export default SvgComponent
