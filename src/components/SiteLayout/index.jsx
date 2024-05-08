import React from "react";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";

const SiteLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default SiteLayout;