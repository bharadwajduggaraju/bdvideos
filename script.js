//Inital Opperations

if (!localStorage.vmd) {
  //Master Data
  //Parse and retive the large json object that is uploaded from the dataupload.js file
  let videomasterdata = JSON.parse(localStorage.tempupload);

  //Channel Info
  let channelpfpandsubs = JSON.parse(localStorage.tempchannelupload);

  for (const [key, value] of Object.entries(videomasterdata)) {
    const vlcopy = value;
    for (const [key2, value2] of Object.entries(vlcopy)) {
      const vlcopy2 = value;
      let finalviewnumber = 0;
      while (finalviewnumber < 1000) {
        finalviewnumber = Math.floor(Math.random() * 1000000);
      }
      videomasterdata[key][key2]["views"] = finalviewnumber;
      videomasterdata[key][key2]["dateup"] = Math.floor(Math.random() * 1825);
      videomasterdata[key][key2]["likes"] = Math.floor(Math.random() * 50);
      videomasterdata[key][key2]["dislikes"] = Math.floor(Math.random() * 50);
    }
  }

  //Save and Set
  let stringv = JSON.stringify(videomasterdata);
  localStorage.setItem("vmd", stringv);
  let stringv2 = JSON.stringify(channelpfpandsubs);

  localStorage.setItem("cdata", stringv2);

  localStorage.setItem(
    "yourpfp",
    "http://unsplash.it/id/102/35/35?gravity=center"
  );

  localStorage.fromhomepagesearch = "false";

  localStorage.yourname = "BD Video User";
}

//Ordering
const video_order = [];

//Retrive
let parses = JSON.parse(localStorage.vmd);
let videomasterdata = parses;
let channeldata = JSON.parse(localStorage.cdata);

//Home Page Script

//Generate Random Names of the videos
const name_array = [
  "Calmnessorzo",
  "Sprout Calmness",
  "Create Calmness",
  "Earth Calmness",
  "Calmnesslux",
  "Blissful Day",
  "Sky of Earth",
  "Region Calmness",
  "Dig Calmness",
  "True Enjoyment",
  "Cherish Life",
  "Dont Sweat it",
  "The Past and The future",
  "Make Life Enjoyable",
  "Passions are Life",
  "How to Find Peace In Life",
  "Just Chill",
  "Books and Breaks",
  "Living the Dream Life",
  "How I Achive my Dreams",
  "How to Calm down",
  "1000 Dollar Giveaway!"
];
const video_titles = document.querySelectorAll(".video-title");
let setnames = [];

video_titles.forEach(video_titles => {
  const lengthofnames = name_array.length;
  const random_value = Math.floor(Math.random() * lengthofnames);
  video_titles.textContent = name_array[random_value];
  setnames.push(name_array[random_value]);
});

//Init Popup for first time
if (localStorage.popup === undefined) {
  localStorage.popup = "false";
}

//Random Data Duration
const video_thumbnails = document.querySelectorAll(".thumbnail");

//Search Algorithm

const search_input = document.querySelector(".search-input");
const submit_button = document.querySelector(".search-btn");
const openclosespecial = document.querySelector(".video-section-title-close"); //Selecting All of the Video Elements in the special section
const videospecials = document.querySelectorAll(".svid");
const allvideos = document.querySelectorAll(".video-container");
const video = document.querySelector(".videos");
let found = 0;
let sfound = 0;
if (submit_button) {
  submit_button.addEventListener("click", e => {
    found = 0;
    sfound = 0;

    e.preventDefault();

    if (search_input.value != "") {
      video.style = "height:100vh;";
      commit_search(search_input.value);
      openclosespecial.style = "display: none; grid-column: 0; ";
      if (sfound === 0) {
        document.querySelector(".video-section-title").innerHTML =
          "<center><h4>No Originals Available</h4></center>";
      } else {
        document.querySelector(".video-section-title").textContent =
          "BD Video Originals";
      }

      if (found === 0) {
        document.querySelector(".videos").style.display = "none";
        document.querySelector(".fa").style.display = "block";
        document.querySelector(".suc").style.display = "none";
        document.querySelector(".video-section-title").style.display = "none";
      } else {
        document.querySelector(".suc").style.display = "block";
        document.querySelector(".insertit").textContent = search_input.value;
        document.querySelector(".videos").style.display = "block";
        document.querySelector(".fa").style.display = "none";
        document.querySelector(".video-section-title").style.display = "block";
      }

      if (found === 0 && search_input.value === "") {
        document.querySelector(".videos").style.display = "none";
      }
    }
  });
}

function commit_search(param) {
  let b = 11;

  videospecials.forEach(videospecials => {
    const titles = setnames[b];
    if (param != "") {
      if (titles.toLowerCase().includes(param.toLowerCase())) {
        sfound += 1;
      }
    }
    b += 1;
  });

  let i = 0;

  allvideos.forEach(allvideos => {
    let eachtitle2 = setnames[i];
    if (param != "") {
      if (eachtitle2.toLowerCase().includes(param.toLowerCase())) {
        allvideos.style.display = "block";
        found += 1;
      } else {
        allvideos.style.display = "none";
      }
    }
    i += 1;
  });
}

function run() {
  const value = search_input.value;
  if (value.length > 0) {
    commit_search(value);
  } else {
  }
}

//Generate Random Names for Chanels
const channel_array = [
  "Bharadwaj D",
  "Dude Calmness",
  "Mr Calmness",
  "Calmbeam",
  "Cali Calmness",
  "Calmness Monestary",
  "Great Peoples",
  "Meemsters",
  "5 Minute Meditation",
  "Relax Squad",
  "Gotta Chill"
];
const video_channel_names = document.querySelectorAll(".video-channel-name");
let set_channels = [];
video_channel_names.forEach(video_channel_names => {
  const lengthofchannels = channel_array.length;
  const random_value2 = Math.floor(Math.random() * lengthofchannels);
  video_channel_names.textContent = channel_array[random_value2];
  set_channels.push(channel_array[random_value2]);
});
//Use split to convert the string into a array

//Generate Random Metadata, Save It
const meta_data = document.querySelectorAll(".video-metadata");
let order_numbers = [];
let order_decimal = [];
let order_full = [];
let dateups = [];
let decimal = "";
let smallv = 0;
let metcounter = 0;
meta_data.forEach(meta_data => {
  const random_views =
    videomasterdata[set_channels[metcounter]][setnames[metcounter]]["views"];
  order_full.push(random_views);
  if (random_views > 999999999) {
    smallv = Math.floor(random_views / 1000000000);
    decimal = "B";
    order_decimal.push(decimal);
    order_numbers.push(smallv);
  } else if (random_views > 999999) {
    smallv = Math.floor(random_views / 1000000);
    decimal = "M";
    order_decimal.push(decimal);
    order_numbers.push(smallv);
  } else if (random_views > 999) {
    smallv = Math.floor(random_views / 1000);
    decimal = "K";
    order_decimal.push(decimal);
    order_numbers.push(smallv);
  } else {
    smallv = random_views;
    decimal = "";
    order_decimal.push(decimal);
    order_numbers.push(smallv);
  }

  const part1 = `${smallv}${decimal} views`;

  const random_date =
    videomasterdata[set_channels[metcounter]][setnames[metcounter]]["dateup"];
  let timeind = "weeks";
  let small = 0;
  if (random_date > 729) {
    small = Math.floor(random_date / 365);
    timeind = "years";
  } else if (random_date > 364) {
    small = Math.floor(random_date / 365);
    timeind = "year";
  } else if (random_date > 58) {
    small = Math.floor(random_date / 30);
    timeind = "months";
  } else if (random_date > 30) {
    small = Math.floor(random_date / 30);
    timeind = "month";
  } else if (random_date > 1) {
    small = random_date;
    timeind = "days";
  } else if (random_date === 1) {
    small = random_date;
    timeind = "day";
  } else {
    timeind = "days";
  }
  const part2 = `${small} ${timeind} ago`;
  dateups.push(part2);

  const final = `${part1} • ${part2}`;
  meta_data.textContent = final;

  metcounter += 1;
});

//Function to set the current video that is being clicked on for dynamic page info
function set_info(ind) {
  localStorage.currenttitle = setnames[ind];
  localStorage.currentauthor = set_channels[ind];
  localStorage.currentdecimal = order_decimal[ind];
  localStorage.fullviews = order_full[ind];
  localStorage.smallviews = order_numbers[ind];
  localStorage.uploaddate = dateups[ind];
  localStorage.videourl = videourls[ind];
  localStorage.likes = likecounts[ind];
  localStorage.dislikes = dislikecount[ind];
  localStorage.pfpurl = profiles[ind];
  localStorage.issubed = issubs[ind];
  localStorage.subcounts = subcounts[ind];
  localStorage.lstate = islikedstates[ind];
  localStorage.dlstate = isdislikedstates[ind];
  localStorage.sstate = issavedstates[ind];
}

//Open and close the special section

let isopen = true;
if (openclosespecial) {
  openclosespecial.addEventListener("click", () => {
    if (isopen) {
      videospecials.forEach(videospecials => {
        videospecials.style.display = "none";
      });

      isopen = false;

      openclosespecial.innerHTML = "&#9654;";
    } else {
      videospecials.forEach(videospecials => {
        videospecials.style.display = "block";
      });

      isopen = true;

      openclosespecial.innerHTML = "×";
    }
  });
}

//Iniitial Message For Customers

setTimeout(init_mod, 4000);

function init_mod() {
  //Dont show the popup if allready shown
  if (localStorage.popup === "false") {
    document.querySelector(".bg-modal").style =
      "display:block; z-index: 100; display: flex; overflow: hidden;";
    localStorage.popup = "true";
  }
}

if (document.querySelector(".close")) {
  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".bg-modal").style =
      "display:block; z-index: 100; display: none; overflow: hidden;";
  });
}

//Menu Icons Popup

const pfp = document.querySelector(".menu-icons");
const pfpmod = document.querySelector(".pfp-modal");

if (document.querySelector(".pfp-modal")) {
  pfp.addEventListener("click", () => {
    document.querySelector(".pfp-modal").style =
      "display:block; z-index: 100; display: flex; overflow: hidden;";
  });
}

if (document.querySelector(".close2")) {
  document.querySelector(".close2").addEventListener("click", () => {
    document.querySelector(".pfp-modal").style =
      "display:block; z-index: 100; display: none; overflow: hidden;";
  });
}

//Data Duration and Image Source
//Set The Image URL, likes, dislikes and more

let datadurations = [];
let count = 0;
let likecounts = [];
let dislikecount = [];
let videourls = [];
let islikedstates = [];
let isdislikedstates = [];
let issavedstates = [];
video_thumbnails.forEach(video_thumbnails => {
  const channel = set_channels[count];
  const name = setnames[count];
  const duration = videomasterdata[channel][name]["duration"];

  video_thumbnails.setAttribute("data-duration", duration);

  count += 1;
});

let count2 = 0;
const thumbnails = document.querySelectorAll(".thumbnail-image");

thumbnails.forEach(thumbnails => {
  const channel2 = set_channels[count2];
  const name2 = setnames[count2];
  const duration2 = videomasterdata[channel2][name2]["thumnail"];
  thumbnails.src = duration2;
  const videourl = videomasterdata[channel2][name2]["video-url"];
  videourls.push(videourl);
  const likies = videomasterdata[channel2][name2]["likes"];
  const dislikes = videomasterdata[channel2][name2]["dislikes"];
  likecounts.push(likies);
  dislikecount.push(dislikes);
  islikedstates.push(videomasterdata[channel2][name2]["isliked"]);
  isdislikedstates.push(videomasterdata[channel2][name2]["isdisliked"]);
  issavedstates.push(videomasterdata[channel2][name2]["issaved"]);
  count2 += 1;
});

//Category Section
const categories = document.querySelectorAll(".category");
let category_array = [
  "Books",
  "Giveaway",
  "Passions",
  "Past",
  "Future",
  "Life",
  "Calm",
  "Sky",
  "Earth",
  "Region",
  "Breaks",
  "Sprout",
  "Living",
  "Cherish",
  "Create",
  "Enjoyment",
  "Bliss",
  "Peace",
  "Calmnesslux",
  "Day",
  "Dig",
  "Down"
];
let counter = 0;
categories.forEach(categories => {
  if (counter > 0) {
    let lengths = category_array.length;
    let categoryind = Math.floor(Math.random() * lengths);
    categories.textContent = category_array[categoryind];
    categories.setAttribute(
      "onclick",
      "newsearch('" + category_array[categoryind] + "')"
    );
    category_array.splice(categoryind, 1);
  } else {
    categories.setAttribute("onclick", "location.reload(true)");
  }
  counter += 1;
});

function newsearch(param) {
  found = 0;
  sfound = 0;

  commit_search(param);
  if (param != "") {
    if (sfound === 0) {
      document.querySelector(".video-section-title").innerHTML =
        "<center><h4>No Originals Available</h4></center>";
    } else {
      document.querySelector(".video-section-title").textContent =
        "BD Video Originals";
    }

    if (found === 0) {
      document.querySelector(".videos").style.display = "none";
      document.querySelector(".fa").style.display = "block";
      document.querySelector(".suc").style.display = "none";
      document.querySelector(".video-section-title").style.display = "none";
    } else {
      document.querySelector(".suc").style.display = "block";
      document.querySelector(".insertit").textContent = param;
      document.querySelector(".videos").style.display = "block";
      document.querySelector(".fa").style.display = "none";
      document.querySelector(".video-section-title").style.display = "block";
    }
  }

  if (found === 0 && param === "") {
    document.querySelector(".videos").style.display = "none";
  }
}

const videochannelimages = document.querySelectorAll(".channel-icon");
let profiles = [];
let issubs = [];
let subcounts = [];
let imcount = 0;
videochannelimages.forEach(videochannelimages => {
  const ctitle = set_channels[imcount];
  if (ctitle) {
    videochannelimages.src = channeldata[ctitle]["pfp"];
    imcount += 1;
    profiles.push(channeldata[ctitle]["pfp"]);
    issubs.push(channeldata[ctitle]["is-subed"]);
    subcounts.push(channeldata[ctitle]["subscribers"]);
  }
});

if (localStorage.yourpfp != undefined) {
  document.querySelector(".menu-channel-icon").src = localStorage.yourpfp;
}

function clears() {
  const tocontinue = confirm("Are You Sure You Want To Do This");
  if (tocontinue) {
    alert("Clearing All Data and Reloading");
    localStorage.clear();
    location.reload(true);
  } else {
    alert("Aborted");
  }
}

//Video Page Opperations

//Subscribe Opperation

const subbtn = document.querySelector(".sub-btn");
if (subbtn) {
  subbtn.addEventListener("click", () => {
    if (localStorage.issubed === "false") {
      localStorage.issubed = "true";
      document.querySelector(".sub-btn").style =
        "background-color: lightgray; color: white;";
      document.querySelector(".sub-btn").textContent = "Subscribed";
      channeldata[localStorage.currentauthor]["is-subed"] = "true";
      localStorage.cdata = JSON.stringify(channeldata);
      rerender();
    } else {
      localStorage.issubed = "false";
      document.querySelector(".sub-btn").style = null;
      document.querySelector(".sub-btn").textContent = "Subscribe";
      channeldata[localStorage.currentauthor]["is-subed"] = "false";
      localStorage.cdata = JSON.stringify(channeldata);
      rerender();
    }
  });
}

function rerender() {
  profiles = [];
  issubs = [];
  subcounts = [];
  imcount = 0;
  videochannelimages.forEach(videochannelimages => {
    const ctitle = set_channels[imcount];
    if (ctitle) {
      videochannelimages.src = channeldata[ctitle]["pfp"];
      imcount += 1;
      profiles.push(channeldata[ctitle]["pfp"]);
      issubs.push(channeldata[ctitle]["is-subed"]);
      subcounts.push(channeldata[ctitle]["subscribers"]);
    }
  });
}

//PFP changing

const pfpchangebutton = document.querySelector(".changepfp");
const fileuploadchange = document.querySelector(".file-upload");

const likebtn = document.querySelector(".likes");
const dlikebtn = document.querySelector(".dislikes");
const sharebtn = document.querySelector(".share");
const savebtn = document.querySelector(".save");

if (pfpchangebutton) {
  pfpchangebutton.addEventListener("click", e => {
    e.preventDefault();
    fileuploadchange.click();
  });
}

if (fileuploadchange) {
  fileuploadchange.addEventListener("change", function() {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();

      reader.addEventListener("load", function() {
        localStorage.setItem("yourpfp", this.result);
        if (localStorage.yourpfp) {
          document.querySelector(".menu-channel-icon").src = this.result;
        }
        alert("Changing PFP and Reloading");
        location.reload(true);
      });

      reader.readAsDataURL(file);
    }
  });
}

//like Button Press
const likecount = document.querySelector(".like-count");
if (likebtn) {
  likebtn.addEventListener("click", e => {
    e.preventDefault();
    const infocollect =
      videomasterdata[localStorage.currentauthor][localStorage.currenttitle];
    if (infocollect["isdisliked"] === "true") {
      infocollect["dislikes"] = parseInt(infocollect["dislikes"]) - 1;
      infocollect["isdisliked"] = "false";
      dlikecount.textContent = infocollect["dislikes"];
      localStorage.dlstate = "false";
      localStorage.dislikes = infocollect["dislikes"];
    }
    handlelikedislikechangev2();
    if (infocollect["isliked"] === "false") {
      infocollect["likes"] = parseInt(infocollect["likes"]) + 1;
      infocollect["isliked"] = "true";
      handlelikedislikechange();
      likecount.textContent = infocollect["likes"];
      const stringv = JSON.stringify(videomasterdata);
      localStorage.vmd = stringv;
      localStorage.lstate = "true";
      localStorage.likes = infocollect["likes"];
      rerender();
    } else {
      infocollect["likes"] = parseInt(infocollect["likes"]) - 1;
      infocollect["isliked"] = "false";
      handlelikedislikechange();
      likecount.textContent = infocollect["likes"];
      const stringv = JSON.stringify(videomasterdata);
      localStorage.vmd = stringv;
      localStorage.lstate = "false";
      localStorage.likes = infocollect["likes"];
      rerender();
    }
  });
}

//Function to handle change on click

function handlelikedislikechange() {
  const infocollect =
    videomasterdata[localStorage.currentauthor][localStorage.currenttitle];
  if (infocollect["isliked"] === "true") {
    likebtn.style = "color: blue;";
  } else {
    likebtn.style = "color: black;";
  }
}

//dislike Button Press
const dlikecount = document.querySelector(".dlike-count");
if (dlikebtn) {
  dlikebtn.addEventListener("click", e => {
    e.preventDefault();
    const infocollect =
      videomasterdata[localStorage.currentauthor][localStorage.currenttitle];
    if (infocollect["isliked"] === "true") {
      infocollect["likes"] = parseInt(infocollect["likes"]) - 1;
      infocollect["isliked"] = "false";
      likecount.textContent = infocollect["likes"];
      localStorage.lstate = "false";
      localStorage.likes = infocollect["likes"];
    }
    handlelikedislikechange();
    if (infocollect["isdisliked"] === "false") {
      infocollect["dislikes"] = parseInt(infocollect["dislikes"]) + 1;
      infocollect["isdisliked"] = "true";
      handlelikedislikechangev2();
      dlikecount.textContent = infocollect["dislikes"];
      const stringv = JSON.stringify(videomasterdata);
      localStorage.vmd = stringv;
      rerender();
      localStorage.dlstate = "true";
      localStorage.dislikes = infocollect["dislikes"];
    } else {
      infocollect["dislikes"] = parseInt(infocollect["dislikes"]) - 1;
      infocollect["isdisliked"] = "false";
      handlelikedislikechangev2();
      dlikecount.textContent = infocollect["dislikes"];
      const stringv = JSON.stringify(videomasterdata);
      localStorage.vmd = stringv;
      localStorage.dlstate = "false";
      localStorage.dislikes = infocollect["dislikes"];
      rerender();
    }
  });
}

//Function to handle change on click

function handlelikedislikechangev2() {
  const infocollect =
    videomasterdata[localStorage.currentauthor][localStorage.currenttitle];
  if (infocollect["isdisliked"] === "true") {
    dlikebtn.style = "color: blue;";
  } else {
    dlikebtn.style = "color: black;";
  }
}

//New Search Redirect

const submitform = document.querySelector(".v2");
const newinput = document.querySelector(".search-inputv2");
if (submitform) {
  submitform.addEventListener("submit", e => {
    e.preventDefault();
    if (newinput.value != "") {
      localStorage.fromhomepagesearch = "true";
      localStorage.valueforsearch = newinput.value;
      window.location.href = "index.html";
    }
  });
}

if (localStorage.fromhomepagesearch === "true") {
  newsearch(localStorage.valueforsearch);
  localStorage.fromhomepagesearch = "false";
}

//Save Button Press
if (savebtn) {
  savebtn.addEventListener("click", e => {
    const infocollectv3 =
      videomasterdata[localStorage.currentauthor][localStorage.currenttitle];
    if (localStorage.sstate === "true") {
      savebtn.style = "color: black;";
      localStorage.sstate = "false";
      infocollectv3["issaved"] = "false";
      const stringv = JSON.stringify(videomasterdata);
      localStorage.vmd = stringv;
      rerender();
    } else {
      savebtn.style = "color: blue;";
      localStorage.sstate = "true";
      infocollectv3["issaved"] = "true";
      const stringv = JSON.stringify(videomasterdata);
      localStorage.vmd = stringv;
      rerender();
    }
  });
}

//Show More Functionality

let isopened = false;
const showmorebutton = document.querySelector(".showmore");
const vdescription = document.querySelector(".video-description");
if (showmorebutton) {
  showmorebutton.addEventListener("click", e => {
    if (!isopened) {
      showmorebutton.textContent = "Show Less";
      isopened = true;
      vdescription.style = "height: 73px;";
    } else {
      showmorebutton.textContent = "Show More";
      isopened = false;
      vdescription.style = null;
    }
  });
}

//COMMENT SECTION

const commentinput = document.querySelector(".iinput");
const successmessage = document.querySelector(".successmessage");
if (commentinput) {
  commentinput.addEventListener("keyup", e => {
    e.preventDefault();
    if (e.keyCode === 13) {
      const currentcomments =
        videomasterdata[localStorage.currentauthor][localStorage.currenttitle][
          "comments"
        ];
      const valueofcomment = commentinput.value;
      if (valueofcomment) {
        const date = new Date();
        const toappend = {
          date: date,
          createdby: localStorage.yourname,
          body: valueofcomment,
          pfptouse: localStorage.yourpfp,
          year: date.getFullYear(),
          month: date.getMonth(),
          day: date.getDate()
        };
        videomasterdata[localStorage.currentauthor][localStorage.currenttitle][
          "comments"
        ].unshift(toappend);

        successmessage.style = "color: green; display: block;";
        successmessage.innerHTML =
          " <span style = 'color: black;'>.</span>  Comment Added!";
        const stringv = JSON.stringify(videomasterdata);
        commentinput.value = "";
        localStorage.vmd = stringv;

        updatecomments();
      } else {
        successmessage.style = "display: block; color: red;";
        successmessage.innerHTML =
          "<span style = 'color: black;'>.</span> Comment is Empty!";
      }
    }
  });
}

const commentssection = document.querySelector(".othercomments");
function updatecomments() {
  const currentcomments2 =
    videomasterdata[localStorage.currentauthor][localStorage.currenttitle][
      "comments"
    ];

  commentssection.textContent = "";
  let counter = 0;
  currentcomments2.forEach(cc2 => {
    const commentelement = document.createElement("div");
    commentelement.className = "comment";
    const currentdate = new Date();
    const daysago =
      (currentdate.getFullYear() - cc2["year"]) * 360 +
      (currentdate.getMonth() - cc2["month"]) * 30 +
      (currentdate.getDate() - cc2["day"]);
    let timeind = "weeks";
    let small = 0;
    if (daysago > 729) {
      small = Math.floor(daysago / 365);
      timeind = "years";
    } else if (daysago > 364) {
      small = Math.floor(daysago / 365);
      timeind = "year";
    } else if (daysago > 58) {
      small = Math.floor(daysago / 30);
      timeind = "months";
    } else if (daysago > 30) {
      small = Math.floor(daysago / 30);
      timeind = "month";
    } else if (daysago > 1) {
      small = daysago;
      timeind = "days";
    } else if (daysago === 1) {
      small = daysago;
      timeind = "day";
    } else {
      small = "";
      timeind = "Posted Today";
    }
    let finals = "";
    if (small === "") {
      finals = timeind;
    } else {
      finals = `${small} ${timeind} ago`;
    }
    commentelement.innerHTML = `<div class="commentpfp">
              <img
                class="channel-iconv2 channel-comment-icon"
                src=" ${localStorage.yourpfp}"
                alt="Channel PFP"
              />
            </div>

            <div class="content">
              <div class="special-flex">
                <h2 class="specialname">
                  ${localStorage.yourname}
                </h2>
                
               
                
              </div>
              <p>
                ${cc2.body}
              </p>
              <h4 class="special-date">
               ${finals}
              </h4>
            </div>`;
    commentssection.appendChild(commentelement);
    const importcontent = JSON.parse(localStorage.vmd);
    if (
      importcontent[localStorage.currentauthor][localStorage.currenttitle][
        "comments"
      ].length +
        1 ===
      1
    ) {
      document.querySelector(".commentcount").textContent =
        importcontent[localStorage.currentauthor][localStorage.currenttitle][
          "comments"
        ].length +
        1 +
        " comment";
    } else {
      document.querySelector(".commentcount").textContent =
        importcontent[localStorage.currentauthor][localStorage.currenttitle][
          "comments"
        ].length +
        1 +
        " comments";
    }
    counter += 1;
  });
}

if (commentssection) {
  updatecomments();
}

const phonesearch = document.querySelector(".phone-search");
const icon = document.querySelector(".bd-logo");
const pfpsearch = document.querySelector(".menu-icons");
const searchbar = document.querySelector(".search-bar");
const xbutton = document.querySelector(".close3");
phonesearch.addEventListener("click", () => {
  icon.style.display = "none";
  pfpsearch.style.display = "none";
  phonesearch.style.display = "none";
  searchbar.style = "display: flex; margin-left: 4px;";
  xbutton.style = "display: block; margin-top: 9px; margin-right: 2px;";
});

xbutton.addEventListener("click", () => {
  icon.style.display = "block";
  pfpsearch.style.display = "block";
  phonesearch.style = null;
  searchbar.style = null;
  xbutton.style = "display: none;";
});

document.querySelector(".name-insert-for-change").textContent =
  localStorage.yourname;

const changename = document.querySelector(".changename");

changename.addEventListener("click", e => {
  const changeto = prompt("New Username");
  localStorage.yourname = changeto;
  alert("Changing Name and Reloading");
  location.reload(true);
});

const icons = document.querySelectorAll(".channel-link-wrapper");
let iconcounter = 0;
icons.forEach(icons => {
  icons.href = `channel.html?channeltitle=${set_channels[iconcounter]}`;
  iconcounter += 1;
});

iconcounter = 0;
video_channel_names.forEach(video_channel_names => {
  video_channel_names.href = `channel.html?channeltitle=${set_channels[iconcounter]}`;
  iconcounter += 1;
});

//Parse Query Params

const url = this.window.location.href;
const popularvideos = document.querySelector(".popular-videos");
const s = value => {
  return document.querySelector(value);
};
if (popularvideos) {
  const info = url.split("?");
  const queryparams = info[1];
  if (queryparams) {
    const querysplit = queryparams.split("=");
    const data = querysplit[1];
    const getinfo = data.split("%20");
    var finalstring = getinfo.join(" ");
  }

  localStorage.fs = finalstring;

  const title = s(".channel-title");
  const subinsert = s(".channel-subs");
  title.textContent = finalstring;
  const subscount = channeldata[finalstring]["subscribers"];
  subinsert.textContent = subscount + " Subscribers";
  s(".channel-art").textContent = finalstring;

  const ourvideo = s("video");
  ourvideo.src = channeldata[finalstring]["special-vid"];

  const ourtitleofsvideo = channeldata[finalstring]["special-title"];
  const vidtit = s(".special-video-title");

  const svidviews = videomasterdata[finalstring][ourtitleofsvideo]["views"];

  const convertviews = viewcount => {
    let random_views = viewcount;

    if (random_views > 999999999) {
      smallv = Math.floor(random_views / 1000000000);
      decimal = "B";
    } else if (random_views > 999999) {
      smallv = Math.floor(random_views / 1000000);
      decimal = "M";
    } else if (random_views > 999) {
      smallv = Math.floor(random_views / 1000);
      decimal = "K";
    } else {
      smallv = random_views;
      decimal = "";
    }

    return [smallv, decimal];
  };

  const viewdata = convertviews(svidviews);

  const convertdate = daycount => {
    let random_date = daycount;
    let timeind = "weeks";
    let small = 0;
    if (random_date > 729) {
      small = Math.floor(random_date / 365);
      timeind = "years";
    } else if (random_date > 364) {
      small = Math.floor(random_date / 365);
      timeind = "year";
    } else if (random_date > 58) {
      small = Math.floor(random_date / 30);
      timeind = "months";
    } else if (random_date > 30) {
      small = Math.floor(random_date / 30);
      timeind = "month";
    } else if (random_date > 1) {
      small = random_date;
      timeind = "days";
    } else if (random_date === 1) {
      small = random_date;
      timeind = "day";
    } else {
      timeind = "days";
    }
    return [small, timeind];
  };

  const sviddate = videomasterdata[finalstring][ourtitleofsvideo]["dateup"];
  const converted = convertdate(sviddate);

  const nameofchannel = s(".channel");
  const viewsofchannel = s(".views");
  const dateofchannel = s(".date");

  nameofchannel.textContent = finalstring;
  viewsofchannel.textContent = viewdata[0] + "" + viewdata[1] + " views";
  dateofchannel.textContent = converted[0] + " " + converted[1] + " ago";
  const populars = videomasterdata[finalstring];
  let allviewsa = [];
  let relations = {};

  for (const [key, value] of Object.entries(populars)) {
    allviewsa.push(populars[key]["views"]);
    let viewcount = populars[key]["views"];
    let ourpusher = {
      thumbnail: populars[key]["thumnail"],
      title: key,
      views: populars[key]["views"],
      date: populars[key]["dateup"],
      "data-duration": populars[key]["duration"]
    };
    relations[viewcount] = ourpusher;
  }
  var set_info_channel = (title, author, decimal, smallv, datesting) => {
    localStorage.currenttitle = title;
    localStorage.currentauthor = author;
    localStorage.currentdecimal = decimal;
    localStorage.smallviews = smallv;
    localStorage.uploaddate = datesting;
    localStorage.videourl = videomasterdata[author][title]["video-url"];
    localStorage.likes = videomasterdata[author][title]["likes"];
    localStorage.dislikes = videomasterdata[author][title]["dislikes"];
    localStorage.pfpurl = channeldata[author]["pfp"];
    localStorage.issubed = channeldata[author]["is-subed"];
    localStorage.subcounts = channeldata[author]["subscribers"];
    localStorage.lstate = videomasterdata[author][title]["isliked"];
    localStorage.dlstate = videomasterdata[author][title]["isdisliked"];
    localStorage.sstate = videomasterdata[author][title]["issaved"];
  };

  allviewsa.sort(function(a, b) {
    return b - a;
  });
  document.querySelector("title").textContent = finalstring;

  const popularvideosection = document.querySelectorAll(".popular");
  let insertioncounter = 0;

  popularvideosection.forEach(popularvideosection => {
    const viewforit = allviewsa[insertioncounter];
    const infoforit = relations[viewforit];
    vidtit.innerHTML = `<a href = "video.html" style = "color: black; text-decoration: none;"   onclick="set_info_channel('${ourtitleofsvideo}', '${
      localStorage.fs
    }', '${viewdata[1]}', ${viewdata[0]} , '${converted[0] +
      " " +
      converted[1] +
      " ago"}')">${ourtitleofsvideo}</a>`;
    popularvideosection.innerHTML = ` <a
            class="thumbnail"
            href="video.html"
            onclick="set_info_channel('${infoforit["title"]}', '${
      localStorage.fs
    }', '${convertviews(infoforit["views"])[1]}', ${
      convertviews(infoforit["views"])[0]
    } , '${convertdate(infoforit["date"])[0] +
      " " +
      convertdate(infoforit["date"])[1] +
      " ago"}')"
            data-duration="${infoforit["data-duration"]}"
            ><img
              class="thumbnail-image"
              src="${infoforit["thumbnail"]}"
          /></a>
          <div class="video-bottom-section">
            <a style = "cursor: pointer;">
              <img
                class="channel-icon"
                src="${channeldata[localStorage.fs]["pfp"]}"
              />
            </a>
            <div class="video-details">
              <a href="video.html"  class="video-title"   onclick="set_info_channel('${
                infoforit["title"]
              }', '${localStorage.fs}', '${
      convertviews(infoforit["views"])[1]
    }', ${convertviews(infoforit["views"])[0]} , '${convertdate(
      infoforit["date"]
    )[0] +
      " " +
      convertdate(infoforit["date"])[1] +
      " ago"}')"
                >${infoforit["title"]}
                </a
              >
              <a class="video-channel-name">${localStorage.fs}</a>
              <div class="video-metadata">
                <span>${convertviews(infoforit["views"])[0] +
                  convertviews(infoforit["views"])[1] +
                  " views"}</span>
                •
                <span>${convertdate(infoforit["date"])[0] +
                  " " +
                  convertdate(infoforit["date"])[1] +
                  " ago"}</span>
              </div>
            </div>
          </div>`;

    insertioncounter += 1;
  });

  const localsubbtn = document.querySelector(".sub-btn");
  localStorage.currentauthor = finalstring;
  if (channeldata[finalstring]["is-subed"] === "true") {
    localsubbtn.style = "background-color: lightgray; color: white;";
    localsubbtn.textContent = "Subscribed";
  }

  const parentallvid = document.querySelector(".allvid");

  for (const [key, value] of Object.entries(populars)) {
    const ourvideoelement = document.createElement("div");
    ourvideoelement.innerHTML = ` <article class="video-container">
          <a
            class="thumbnail"
            onclick="set_info_channel('${key}', '${localStorage.fs}', '${
      convertviews(populars[key]["views"])[1]
    }', ${convertviews(populars[key]["views"])[0]} , '${convertdate(
      populars[key]["dateup"]
    )[0] +
      " " +
      convertdate(populars[key]["dateup"])[1] +
      " ago"}')"
            href="video.html"
            data-duration="${populars[key]["duration"]}"
            ><img
              class="thumbnail-image"
              src="${populars[key]["thumnail"]}"
          /></a>
          <div class="video-bottom-section">
            <a  class = "channel-link-wrapper">
              <img
                class="channel-icon"
                src="${channeldata[localStorage.fs]["pfp"]}"
              />
            </a>
            <div class="video-details">
              <a href="video.html" onclick="set_info(0)" class="video-title"
                >${key}</a
              >
              <a class="video-channel-name">${localStorage.fs}</a>
              <div class="video-metadata">
                <span>${convertviews(populars[key]["views"])[0] +
                  convertviews(populars[key]["views"])[1] +
                  " views"}</span>
                •
                <span>${convertdate(populars[key]["dateup"])[0] +
                  " " +
                  convertdate(populars[key]["dateup"])[1] +
                  " ago"}</span>
              </div>
            </div>
          </div>
        </article>`;
    parentallvid.appendChild(ourvideoelement);
  }
}
