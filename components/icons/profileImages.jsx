import * as React from "react"

function ProfileImages({ fill = "#6C7281", ...rest }) {
  return (
    <img
      src="https://source.unsplash.com/50x50/?portrait?3"
      alt=""
      className="w-16 h-16 mx-auto rounded-full dark:bg-gray-500 aspect-square topov"
    />
  )
}

export default ProfileImages
