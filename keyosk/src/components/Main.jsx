import React from "react"
import '../css/common.css'
import { Menu, Aside, Itmes } from './index'

const Init = ({data}) => {
    const menu = data.data.menu;
    const set = data.data.set;
    console.log('menu',data)
    return (
        <React.Fragment>
            <div className="wrap">
                <section className="main_wrap">
                    <header className="header">
                        <h1 className="logo">로고</h1>
                        <nav className="nav">
                            <p>Back</p>
                        </nav>
                    </header>
                    <main className="main">
                        <h2 class="title">상품을 담아주세요.</h2>
                        <section className="menu_section">
                            <ul className="menu_wrap">
                                <Menu items = {menu}/>
                            </ul>
                        </section>
                        <section className="item_main">
                            <h2 class="title">
                                Bugers &#38; <br/>
                                Sandwiches
                            </h2>
                            <div className="item_section">
                                <ul className="item_wrap">
                                    <Itmes set = {set} />
                                </ul>
                            </div>
                        </section>
                    </main>
                </section>
                <aside class="aside_wrap">
                    <Aside />
                </aside>
            </div>
        </React.Fragment>
    )
}

export default Init