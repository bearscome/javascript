import * as React from 'react';

const Aside = () => {
    return (
        <>
            <header className="myorder_header">
                <h2>My Order</h2>
                <p>Take Out</p>
            </header>
            <main className="myorder_section"> 
                <ul className="myorder_wrap">
                    <li className="myorder_item">
                        <p>이미지</p>
                        <p>상품 명</p>
                        <p>금액</p>
                        <button>-</button>
                        <span>갯수</span>
                        <button>+</button>
                    </li>
                </ul>
            </main>
            <footer class="myorder_footer">
                <div>
                    <p>Total</p>
                    <p>19999</p>
                </div>
                <button>Done</button>
            </footer>
        </>
    )
};

export default Aside;