export const formatLikes = (likeCount) => {
    if (likeCount >= 1000) {
      return `${(likeCount / 1000).toFixed(1)}k`;
    } else {
      return likeCount.toString();
    }
  };
