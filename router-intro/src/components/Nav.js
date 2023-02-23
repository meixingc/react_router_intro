import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <div>
            <h1> I am Nav </h1>
            <Link to='/'> Home </Link>
            <Link to='/componentA'> ComponentA </Link>
            <Link to='/componentB'> ComponentB </Link>
        </div>
    )
}