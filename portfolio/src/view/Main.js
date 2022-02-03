import React from "react";

import Landing from "./Landing";
import Contents from "./Contents";
import Footer from "../view/Footer";

function Main() {
  return (
    <div>
      <section>
        <Landing />
      </section>
      <section>
        <Contents />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Main;
