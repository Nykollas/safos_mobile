import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 34 34" fill="none" {...props}>
      <Path
        d="M17 2.833C9.18 2.833 2.833 9.18 2.833 17c0 7.82 6.347 14.167 14.167 14.167 7.82 0 14.166-6.347 14.166-14.167C31.166 9.18 24.82 2.833 17 2.833zm1.416 21.25h-2.833V21.25h2.833v2.833zm0-5.666h-2.833v-8.5h2.833v8.5z"
        fill="#DD2C00"
      />
    </Svg>
  )
}

export default SvgComponent