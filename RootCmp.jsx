const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { Home } from "./views/Home.jsx"
import { UserMsg } from "./cmps/UserMsg.jsx"

export function App() {
    return <Router>
        <section className="app">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <UserMsg />
        </section>
    </Router>
}