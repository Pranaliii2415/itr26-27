// ================= Iterating DOM Elements =================

// querySelectorAll() returns a NodeList

const anchorTags = document.querySelectorAll("a");

console.log(anchorTags);

// 1. for loop

for (let i = 0; i < anchorTags.length; i++) {
    anchorTags[i].style.color = "green";
    anchorTags[i].style.fontWeight = "bold";
}

// 2. for...of loop

for (let anchorTag of anchorTags) {
    anchorTag.style.backgroundColor = "#fff";
    anchorTag.style.color = "purple";
}

// 3. forEach() method

anchorTags.forEach((anchorTag) => {
    anchorTag.style.textDecoration = "none";
});

// Convert NodeList to Array

const anchorArray = Array.from(anchorTags);

console.log(Array.isArray(anchorArray)); // true