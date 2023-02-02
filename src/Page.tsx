import React from "react";
import style from "./Page.module.scss";

const Page = () => {
	return (
		<div>
			<h2 className={style.pageTitle}>This is a page</h2>
			<p>This is some text</p>
			<div className={style.items}>
				Some items
				<div className={style.firstItem}>Line 1</div>
				<div>Line 2</div>
			</div>
		</div>
	);
};

export default Page;
