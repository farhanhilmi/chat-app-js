let userID = 1;

document.getElementById("title-app").innerHTML = "Elon Musk";
document.getElementById("myImage").src =
  "https://s3-prod-europe.autonews.com/s3fs-public/styles/800x600/public/Elon%20Musk%20reuters_0.JPG";

document.getElementById("newChat").onclick = function () {
  newChat();
};

function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function newChat() {
  document.getElementById("chatPanel").style.display = "none";
  document.getElementById("right-panel").style.display = "flex";

  let hr = document.createElement("hr");
  let div_chats = document.createElement("div");
  let img = document.createElement("img");
  let div_msg = document.createElement("div");
  let h5 = document.createElement("h5");
  let p = document.createElement("p");

  let click = `getChat(${userID})`;

  setAttributes(div_chats, {
    class: "chats",
    id: userID,
    onclick: click,
  });
  setAttributes(img, {
    src:
      "https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png",
  });
  div_msg.setAttribute("class", "chats-msg");
  h5.textContent = " ";

  const receiver = document.getElementById("newChatValue");

  div_chats.appendChild(img);
  div_chats.appendChild(div_msg);
  div_msg.appendChild(h5);
  div_msg.appendChild(p);

  document.getElementById("btnNewChat").onclick = function () {
    p.textContent = receiver.value;
    document.getElementById("chats-content").appendChild(hr);
    document.getElementById("chats-content").appendChild(div_chats);

    document.getElementById("chatPanel").style.display = "flex";
    document.getElementById("right-panel").style.display = "none";
  };
}

function getChat(id) {
  document.getElementById("chatPanel").style.display = "flex";
  document.getElementById("right-panel").style.display = "none";

  document.getElementById(id).classList.add("bgGelap");
}

let inputBox = document.getElementById("chatMsg");

inputBox.addEventListener("keydown", function (e) {
  if (e.keyCode == 13) {
    let inputMsg = inputBox.value;
    console.log(inputMsg);

    let msg_box = document.createElement("div");
    let msg = document.createElement("p");

    msg.textContent = inputMsg;
    msg_box.setAttribute("class", "sender");
    msg_box.appendChild(msg);
    document.getElementById("messages").appendChild(msg_box);
    inputBox.value = "";
  }
});
