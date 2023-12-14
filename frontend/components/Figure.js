import React from "react"

export default function Figure( {imageURL, caption}) {
    <figure>
      <img src={imageURL} />
      <figcaption>Awsome pic taken on {caption}</figcaption>
    </figure>
}