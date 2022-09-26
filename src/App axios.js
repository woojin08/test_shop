import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import Header from "./pages/Header";
import Detail from "./pages/Detail";
import axios from 'axios';


function App() {
    const [con, setCon] = useState();
    const [loading, setLoading] = useState(false);
    const url = process.env.PUBLIC_URL + '/data.json';

    useEffect(() => {
        setLoading(false);
        const getData = async () => {
            const res = await axios.get(url);
            setCon(res.data);
            setLoading(true)
        }
        getData();
    }, [])
    return (
        <div>
            <div>
                {
                    loading ? <div>

                        {
                            con.map(it => {
                                return (
                                    <div key={it.id}>
                                        <Link to={"/list/" + it.id}>

                                            {it.name}
                                        </Link>
                                    </div>
                                )
                            })
                        }

                        <Routes>
                            <Route path='/list/:num' element={<Detail list={con} />} />
                        </Routes>
                    </div>
                        : <div>ㅇㅅㅇ</div>}
            </div>
            <Header />
        </div>
    );
}

export default App;
