import React from "react";

import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";

const SiteLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <main style={{marginTop: "76px"}} className="">{children}</main>
            <Footer />
        </div>
    );
};

export default SiteLayout;