let num = 0;

function checkPalindrome() {
  let str = "";

  for (let i = 0; i < num; i++) {
    str += document.getElementById(`input${i}`).value;
  }

  let str1 = str.split("").reverse().join("");
  if (str === str1) {
    document.getElementById("result").innerHTML = "Jeste palindrom";
  } else {
    document.getElementById("result").innerHTML = "Nije palindrom";
  }
}

function clearInput() {
  for (let i = 0; i < num; i++) {
    document.getElementById(`input${i}`).value = "";
  }
}

function generateBoxes() {
  num = document.getElementById("numOfChars").value;

  for (let i = 0; i < num; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.setAttribute("id", `box${i}`);

    let input = document.createElement("input");
    input.classList.add("input");
    input.setAttribute("id", `input${i}`);
    input.setAttribute("pattern", "[a-zA-Z ]");

    document.getElementById("boxes").appendChild(box);
    document.getElementById(`box${i}`).appendChild(input);

    let closeBox = document.createElement("div");
    closeBox.classList.add("closeButton");
    closeBox.onclick = function () {
      document.getElementById(`box${i}`).remove();
      num--;
    };
    closeBox.innerHTML = "x";
    document.getElementById(`box${i}`).appendChild(closeBox);

    document.getElementById("generate").hidden = true;
    document.getElementById("check").hidden = false;
    document.getElementById("clear").hidden = false;
    document.getElementById("reset").hidden = false;
  }
}
