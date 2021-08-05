import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector((state) => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  }
  const style2 = {
    display: 'none',
  }
  const [displayNotification, setDisplayNotification] = useState(false)

  useEffect(() => {
    if (notification.length) {
      setDisplayNotification(true)
    }
    setTimeout(() => {
      setDisplayNotification(false)
    }, 5000)
  }, [notification])

  return (
    <div style={displayNotification === true ? style : style2}>
      {notification}
    </div>
  )
}

export default Notification
