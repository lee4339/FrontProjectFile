import React from "react";
import Contents from "./component/contents";
import Footer from "./component/footer";
import MainImg from "./component/mainImg";

function MainPage() {
    return (
        <div>
            <MainImg/>
            <Contents/>
            <Footer/> 
        </div>
    )
}

export default MainPage;