// nested_friend
let myMark = 80;
let friendsMark = 39;

if (myMark > 80 && friendsMark > 80) {
  console.log("Let's go for a lunch!");
} else if (myMark > 80 && friendsMark < 80 && friendsMark >= 60) {
  console.log("Good luck next time!");
} else if (myMark > 80 && friendsMark < 60 && friendsMark >= 40) {
  console.log("Friend's message unseen!");
} else if (myMark > 80 && friendsMark < 40) {
  console.log("Block friend!");
} else {
  console.log("Go to home! Sleep and act sadly!!!")
}
