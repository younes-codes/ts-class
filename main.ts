// import Point from "./point.js";
import LikeStatus from "./like.js";

const likeBtn = document.getElementById("btn");
const numOfLike = document.getElementById("like");

let getLikeStatus = new LikeStatus(0, false, likeBtn, numOfLike);

numOfLike.innerText = "0";
likeBtn.onclick = () => {
  getLikeStatus.updateLikeStatus();
  console.log(`Total like is ${getLikeStatus.numberOfLike}`);
};

// let line = new Point(1, 4);
// line.draw();
// const likes = document.getElementById("like");
