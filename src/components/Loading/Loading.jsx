import React from 'react'

const Loading = () => {
  return (
    <div class="text-center flex-col  flex justify-center items-center">
  <div
    class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-black mx-auto"
  ></div>
  <h2 class="text-black  mt-4">Loading...</h2>
  <p class="text-red ">
    Please wait to explore
  </p>
</div>
  )
}

export default Loading