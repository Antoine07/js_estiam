export function addDragons(main, dragonsList, button, clean) {

  if (clean === true) {
      while(main.firstChild){
          main.removeChild(main.firstChild)
      }
  }

  main.appendChild(button);
  const ul = document.createElement("ul");

  for (const { id, name, average, relations } of dragonsList) {
    const li = document.createElement("li");
    const content = document.createTextNode(name);
    li.appendChild(content);

    if (average) {
      let p = document.createElement("p");
      p.appendChild(document.createTextNode(`Moyenne forces :  ${average}`));
      li.appendChild(p);
    }

    if (relations) {
      let ulR = document.createElement("ul");
      let liR = null;
      for (const { name: nameR } of relations) {
        liR = document.createElement("li");
        liR.appendChild(document.createTextNode(nameR));
        ulR.appendChild(liR);
      }

      li.appendChild(ulR);
    }

    ul.appendChild(li);
  }

  main.appendChild(ul);
}

export const average = (data) => {
  if (data.length > 0)
    return (
      Math.floor((data.reduce((acc, curr) => acc + curr) / data.length) * 100) /
      100
    );

  return null;
};

export const createButton = (label) => {
  const button = document.createElement("button");
  const buttonText = document.createTextNode(label);
  button.appendChild(buttonText);

  return button;
}