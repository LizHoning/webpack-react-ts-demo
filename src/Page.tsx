import React from "react";
import style from "./Page.module.scss";
import boxes from "./assets/images/boxes.png";

const Page = () => {
    return (
        <div>
            <h2 className={style.pageTitle}>This is a page</h2>
            <p>This is some text</p>
            <div className={style.items}>
                Some items
                <div className={style.firstItem}>Line 1</div>
                <div>Line 2</div>
                <img src={boxes} alt="Just some boxes" />
                <div className={style.box1}></div>
                <div className={style.box2}></div>
                <div className={style.box3}></div>
                <div className={style.icon}>face</div>
            </div>
        </div>
    );
};

export default Page;
