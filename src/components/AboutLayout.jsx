
import { NavLink, Outlet } from 'react-router-dom'



export default function AboutLayout() {
  return (
    <div className="about-layout">
<h2>Website About</h2>
<p>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, soluta.
</p>

<nav>
  <NavLink to='company'> View Company</NavLink>
  <NavLink to='team'> View Teams</NavLink>
</nav>

<Outlet/>
    </div>
  )
}
