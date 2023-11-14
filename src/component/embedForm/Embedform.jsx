import React, {useEffect} from 'react'

const Embedform = () => {
    useEffect(()=>{
        const script = document.createElement("script");
        script.src = "https://forms.app/static/embed.js";
        script.async = true;
    
        document.body.appendChild(script);
    
        script.onload = () => {
          var formsappForm = new window.formsapp('6540f2c54b72a9ccdc5b214f', 'standard', {"width":"100%","height":"500px","opacity":0});
        }
      },[])
      return <div formsappId="6540f2c54b72a9ccdc5b214f" ></div>;
}

export default Embedform
