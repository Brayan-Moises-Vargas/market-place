import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='social-links'>
        <a
          href='https://www.instagram.com/rustico.kids/?next=%2F'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src='/instagram-icon.png'
            alt='Instagram'
          />
        </a>
        {/* Agrega más enlaces según sea necesario */}
      </div>
      <p>
        MarketPlace - Todos los derechos reservados &copy;{' '}
        {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer