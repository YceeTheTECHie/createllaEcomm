export const DateConverter = data => {
    const currentTime = new Date();
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    var elapsed = currentTime - new Date(data);
    if (elapsed < msPerMinute) {
      return Math.floor(elapsed / 1000) + " seconds ago";
    } else if (elapsed < msPerHour) {
      return Math.floor(elapsed / msPerMinute) + " minutes ago";
    } else if (elapsed < msPerDay) {
      return Math.floor(elapsed / msPerHour) + " hours ago";
    } else if (elapsed < msPerDay * 8) {
      return Math.floor(elapsed / msPerDay) + " days ago";
    } else {
      return new Date(data).toDateString();
    }
  }
