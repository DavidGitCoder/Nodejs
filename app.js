function filterEvens(arr) {
  return arr.filter(num => num % 2 === 0);
}

console.log(filterEvens([1, 2, 3, 4, 5, 6, 13, 24]));

/**
 * 
 * @param {*} str 
 */
function reverseString(str) {
  let reversedStr = ""
  for (let i = str.length - 1, rev = ""; i >= 0; i--) {
    rev += str[i];
    reversedStr = rev;
  }
  return reversedStr;

}
console.log(reverseString("tu vas bien"));

function reverseString(str) {
  let reversed = "";
  for (const char of str) {
    reversed = char + reversed; // prepend each character
  }
  return reversed;
}

console.log(reverseString("c'est un truc de fou"));

async function fetchJSON(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json()
      .then(data => {
        for (const item in data) {
          if (item == "title") { console.log(data[item]); }
        }
      }
      )// (item=>console.log(item)))
      .catch(err => { throw new Error(`JSON parsing error: ${err.message}`); });


  } catch (error) {
    console.error(`error caught: ${error.message}`);
  }

}
//const jsonResult = fetchJSON("https://jsonplaceholder.typicode.com/todos/1");


function unique(arr) {
  //return [...new Set(arr)];
  arr.forEach((ele, index) => {
    for (let i = 0; i < arr.length; i++) {

      if (ele == arr[i] && index != i) {
        arr.splice(i, 1);
        i--;
      }
    }
  })
  return arr.toSorted((a, b) => a - b);
  //return arr
}

console.log(unique([8, 9, 0, 1, 3, 2, 9, 1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9, 9, 9, 10]));


async function fetchJSON2(url) {
  try {

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();

    const first5 = result.slice(0, 5);

    first5.forEach(item => {
      console.log(item.title);
    })

  return first5;

} catch (error) {
  console.error(`error caught: ${error.message}`);
}

}
fetchJSON2("https://jsonplaceholder.typicode.com/todos");
