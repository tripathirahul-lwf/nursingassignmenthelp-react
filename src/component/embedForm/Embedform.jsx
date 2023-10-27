import React, {useEffect} from 'react'

const Embedform = () => {
    useEffect(()=>{
        const script = document.createElement("script");
        script.src = "https://forms.app/static/embed.js";
        script.async = true;
    
        document.body.appendChild(script);
    
        script.onload = () => {
          var formsappForm = new window.formsapp('64edf9f987b11fad18feb978', 'standard', {"width":"100%","height":"500px","opacity":0});
        }
      },[])
      return <div formsappId="64edf9f987b11fad18feb978" ></div>;
}

export default Embedform
