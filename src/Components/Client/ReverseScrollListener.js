'use client'
import { useEffect } from "react"
const reverseScrollEventListener = (event) => {
    // Check if the user is scrolling vertically
    if (event.deltaY !== 0) {
      // Prevent default vertical scrolling behavior
      event.preventDefault();
      // Calculate the amount to scroll horizontally
      const scrollAmount = event.deltaY * 0.8;
      // Scroll horizontally
      scrollableDiv.scrollLeft += scrollAmount;
    }
};
function ReverseScrollListener() {
  return (
    <div>ReverseScrollListener</div>
  )
}

export default ReverseScrollListener