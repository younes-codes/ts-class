export default class LikeStatus {
    constructor(numberOfLike, isLiked, btn, likeCount) {
        this.numberOfLike = numberOfLike;
        this.isLiked = isLiked;
        this.btn = btn;
        this.likeCount = likeCount;
    }
    updateLikeStatus() {
        this.isLiked = !this.isLiked;
        this.isLiked
            ? (this.numberOfLike++,
                (this.btn.style.backgroundColor = "rgb(36, 36, 201)"))
            : (this.numberOfLike--,
                (this.btn.style.backgroundColor = "rgb(200, 200, 211)"));
        this.likeCount.innerText = this.numberOfLike.toString();
    }
}
