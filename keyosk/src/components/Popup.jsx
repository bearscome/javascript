import * as React from 'react';

const Popup = () => {
    return (
        <React.Fragment>
            <div className="popup" style={{display:'none'}}>
                <header>
                    <button>X</button>
                </header>
                <main>
                    <section>
                        <img />
                        <p>메뉴 이름</p>
                        <p>가격</p>
                    </section>
                    <section>
                        <div>
                            <button>-</button>
                            <p>수량</p> 
                            <button>+</button>
                        </div>    
                    </section>
                    <section>
                        <button>변경</button>
                        <button>담기</button>
                    </section>
                </main>
                <footer>
                    <div>
                        <p>추천메뉴</p>
                        <img />
                        <div>
                            <p>추천 메뉴 이름</p>
                            <span>가격</span>
                            <button>이동</button>
                        </div>
                    </div>
                </footer>
                <section>
                    <ul>
                        <li>
                            <img />
                            <p>
                                <span>패티</span>
                                <span>80칼로리</span>
                            </p>
                            <div>
                                <button>-</button>
                                <p>수량</p>
                                <button>+</button>
                            </div>
                        </li>
                        <li>
                            <img />
                            <p>
                                <span>양상추</span>
                                <span>30칼로리</span>
                            </p>
                            <div>
                                <button>-</button>
                                <p>수량</p>
                                <button>+</button>
                            </div>
                        </li>
                        <li>
                            <img />
                            <p>
                                <span>패티</span>
                                <span>120칼로리</span>
                            </p>
                            <div>
                                <button>-</button>
                                <p>수량</p>
                                <button>+</button>
                            </div>
                        </li>
                        <li>
                            <img />
                            <p>
                                <span>치즈</span>
                                <span>45칼로리</span>
                            </p>
                            <div>
                                <button>-</button>
                                <p>수량</p>
                                <button>+</button>
                            </div>
                        </li>
                        <li>
                            <img />
                            <p>
                                <span>불고기소스</span>
                                <span>50칼로리</span>
                            </p>
                            <div>
                                <button>-</button>
                                <p>수량</p>
                                <button>+</button>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </React.Fragment>
    )
};

export default Popup;
