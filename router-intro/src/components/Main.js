import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import ComponentA from "./ComponentA"
import ComponentB from "./ComponentB"
import Nav from "./Nav"

export default function Main() {

    const userName = 'fakeuser123'

    return (
        <div>
            <h1> I am Main </h1>
            <Nav />

            <Routes>
                <Route exact path='/' element={<Home userName={userName}/>} />
                <Route exact path='/componentA' element={<ComponentA />} />
                <Route exact path='/componentB' element={<ComponentB />} />
            </Routes>
        </div>
    )
}