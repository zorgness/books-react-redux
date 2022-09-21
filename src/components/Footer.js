import React from 'react'

const Footer = () => {


  const styles = {
    left:'0',
    bottom:'0',
    right:'0'
  }


  return (
    <footer className='text-white bg-secondary' style={styles}>
      <div className="container p-4 text-center">
        <span>&copy; Udemy React Redux</span>
      </div>

    </footer>

  )
}

export default Footer
