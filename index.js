fetch("https://cat-fact.herokuapp.com/facts")
  .then((resp) => resp.json())
  .then((resp) => displayFacts(resp))
  .catch((err) => console.error(err));

let displayFacts = (facts) => {
  console.log(facts);
  let list = document.querySelector(".list");
  facts.forEach((fact) => {
    let listItem = document.createElement("li");
    listItem.classList.add(["list-item"]);
    listItem.innerText = fact.text;
    list.appendChild(listItem);
  });
};
