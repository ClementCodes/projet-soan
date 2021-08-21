import React, { useState } from 'react';



const LogiqueModalePhone = () => {
  
    const [reveles, changeReveles] = useState(false);
    

    function toggles() {
        changeReveles(!reveles)
    }
    return {
        reveles,
        toggles
    };
};

export default LogiqueModalePhone;