import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={32} height={28} viewBox="0 0 32 28" fill="none" {...props}>
      <Path
        d="M.417 27.75h31.167L16 .833.417 27.75zm17-4.25h-2.833v-2.833h2.833V23.5zm0-5.667h-2.833v-5.666h2.833v5.666z"
        fill="#FFA000"
      />
    </Svg>
  )
}

export default SvgComponent
