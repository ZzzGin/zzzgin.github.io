import * as React from "react"
import { useState } from "react";
import ReactMarkdown from 'react-markdown'
import '../../../../components/css/github-markdown.css';

const EncryptedBlog = () => {

    const plaintext = 
`---
title: title in frontmatter
---

## Title
This is a title

### this is another title
What a **nice day**.`;  

    var CryptoJS = require("crypto-js");

    const cyphertext = "secret";
    var encrypted = CryptoJS.AES.encrypt(plaintext, cyphertext);


    const [md, setMd] = useState("");


    const handleChange = ((event) => {
        console.log(event.target.value);
        try {
            const decrypted = CryptoJS.AES.decrypt(encrypted, event.target.value).toString(CryptoJS.enc.Utf8);
            setMd(decrypted);
        } catch (err) {
            console.error("cypher error");
        }
    });

    return (
      <>
        <div>Cipher is: "secret".</div>
        <input type="password" onChange={handleChange}></input>
        <ReactMarkdown children={md} className="blog-post-content"></ReactMarkdown>
      </>
    )
  }
  
  export default EncryptedBlog;
  