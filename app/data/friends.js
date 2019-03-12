// ===============================================================================
// DATA
// Save application's data inside of `app/data/friends.js` as an array of objects. 
// ===============================================================================

var friendArray = [
  {
      name:"TEST",
      photo:"https://target.scene7.com/is/image/Target/GUEST_8530e0ca-f187-45e3-b968-6a5bd1e0d8ce?wid=488&hei=488&fmt=webp",
      scores:[
          1,
          1,
          1,
          2,
          1,
          1,
          1,
          1,
          2,
          1
        ]
  }
];

// Export the array to make this data accessible to other files using require.
module.exports = friendArray;
