import React from "react";
import "./PostElement.css";

const PostElement = () => {
  const writerName = "이윤성";
  const postTime = "오후 1:32";
  const imgUrl = "img/test_img.jpeg";
  const postContent = "반갑습니다 여러분!! ";
  return (
    <div class="post-element">
      <img class="post-profile_img" src={imgUrl}></img>
      <div class="post-body">
        <div class="post-writer">{writerName}</div>
        <div class="post-time">{postTime}</div>
        <div class="post-content">{postContent}</div>
        {/* 해시태그 */}
      </div>
    </div>
  );
};

export default PostElement;

/*
 일단은 모든 css abobe xd에 따라 pixel로 구현하였음.
 더보기 , 해시태그 구현예정
 게시물 리스트 같은 경우는, 매핑을 통해 구현할 듯합니다.
*/
