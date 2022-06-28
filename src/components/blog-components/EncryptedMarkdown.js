import * as React from "react"
import { useState } from "react";
import "@components/css/github-markdown.css";
import "@components/css/blog-post.css";
import anime from 'animejs';

const EncryptedMarkdown = (props) => {

  var CryptoJS = require("crypto-js");

  var encrypted = props.encrypted;

  const [md, setMd] = useState("");
  const [color, setColor] = useState("red");

  const animationRef = React.useRef(null);

  const shakeAnim = (t, conf) => {
    const defaults = {
      duration: 100,
      xMax: 30,
      easing: 'easeInOutSine',
    };
    const settings = Object.assign(defaults, conf);
    const xMax = settings.xMax;
    return anime({
      targets: t,
      easing: settings.easing,
      duration: settings.duration,
      translateX: [
        { value: xMax * -1}, { value: xMax }, { value: xMax/-2 },
        { value: xMax/2 }, { value: 0 }],
      autoplay: false,
    });
  };

  React.useEffect(() => {
    animationRef.current = shakeAnim("input");
  }, []);

  const handleChange = ((event) => {
    try {
      const decrypted = CryptoJS.AES.decrypt(encrypted, event.target.value).toString(CryptoJS.enc.Utf8);
      setMd(decrypted);
      setColor("green");
    } catch (err) {
      console.error("cypher error");
      setMd("");
      animationRef.current.play();
      setColor("red");
    }
  });

  return (
    <>
      <input
        style={{
          color: `var(--${color})`,
          border: `2px solid var(--${color})`,
        }}
        type="password" 
        onChange={handleChange} 
        className="pw-input">
      </input>
      <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: md }}
        /> 
    </>
  )
}

export default EncryptedMarkdown;
