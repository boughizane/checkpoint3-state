import React from 'react'

const Nav = () => {
  return (
    <div>
        <header>
            <div className='logo'>
                <h1>YOUR PC</h1>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJBJREFUSEvtlE0OQDAUhD+nsBYWDiK2LuMQTiSxcA4r1m5BiIq/Iq1KmrTbduZ7b9KMh+HjGfbnd0AGFECsuFkD5EAp9McNesBXNBeyDghlgGG5UI3upD8aOYCL6PEDu4gsiGjqkeBxzvsHLRDJuigFKk1AAtRXAPHFNP1X+dxz27IzDvhq8p2Pau+/HsZ+wAifXyEZA1BA5wAAAABJRU5ErkJggg=="/>
            </div>
      
            <form>
            <input type="text" placeholder="Search..."></input>
            <button type="submit">Rechercher</button>
            </form>


            <ul>
                <li>About</li>
                <li>Service</li>
                <li>Help</li>
            </ul>

        </header>
      
    </div>
  )
}

export default Nav
