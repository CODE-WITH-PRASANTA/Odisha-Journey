import React from 'react'
import PackageMain from '../../Components/PackageMain/PackageMain'
import PackageMiddle from '../../Components/PackageMiddle/PackageMiddle'
import PackageCallback from '../../Components/PackageCallback/PackageCallback'

const Package = () => {
  return (
    <div>
      <PackageMain />
      <PackageMiddle/>
      <PackageCallback/>
    </div>
  )
}

export default Package