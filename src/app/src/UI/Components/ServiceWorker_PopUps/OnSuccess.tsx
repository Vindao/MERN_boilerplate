import * as React from "react";

import PopUp from "./ServiceWorker_PopUp";

const OnSWsuccess = () => {
  return <PopUp text="App is now cached for offline use" duration={15} />;
};

export default OnSWsuccess;
