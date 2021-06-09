import React from 'react';
import Loader from "react-loader-spinner";
export default function App() {
    return (
      <Loader
        type="Puff"
        color="#f72585"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }
