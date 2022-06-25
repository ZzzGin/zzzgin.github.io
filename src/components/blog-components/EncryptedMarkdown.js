import * as React from "react"
import { useState } from "react";
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import anime from 'animejs';
import "@components/css/github-markdown.css";

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
          fontSize: "1.6rem",
          fontWeight: 700,
          marginBottom: "1rem",
          border: `2px solid var(--${color})`,
          borderRadius: "4px"
        }}
        type="password" onChange={handleChange}>
      </input>
      <ReactMarkdown
        children={md}
        className="blog-post-content"
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                // style={dark}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
        }}
      />
    </>
  )
}

export default EncryptedMarkdown;
