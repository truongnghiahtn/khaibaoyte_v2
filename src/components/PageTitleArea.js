import React, { useState } from "react";

export default function PageTitleArea(props) {


  return (
    <div className="page-title-area">
      <h1>{props.title}</h1>
      <p>{props.des}</p>
      <a href="https://play.google.com/store/apps/details?id=com.vnptit.innovation.ncovi">
        https://play.google.com/store/apps/details?id=com.vnptit.innovation.ncovi
      </a>
      <a href="https://apps.apple.com/vn/app/ncovi/id1501934178">
        https://apps.apple.com/vn/app/ncovi/id1501934178
      </a>
      <br />
      <span>*Bắt buộc</span>
    </div>
  );
}
