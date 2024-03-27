/* eslint-disable */
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let newCharacter = {
    characterName: ["Monik", "Gron", "Malik", "Fermir"],
    surname: ["PlainsWalker", "Fugil", "Mandrek", "Chuil"],
    characterClass: ["Mage", "Warrior", "Rogue", "Bard"],
    abilities: {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0
    },
    getName: () => {
      return `${newCharacter.characterName[Math.floor(Math.random() * 4)]} ${
        newCharacter.surname[Math.floor(Math.random() * 4)]
      }`;
    },

    getClass: classNumber => {
      return newCharacter.characterClass[classNumber];
    },
    setAbilities: classNumber => {
      if (classNumber === 0) {
        for (const key in newCharacter.abilities) {
          if (Object.hasOwnProperty.call(newCharacter.abilities, key)) {
            newCharacter.abilities[key] = Math.floor(Math.random() * 10 + 8);
          }
        }
      }
      if (classNumber === 1) {
        for (const key in newCharacter.abilities) {
          if (Object.hasOwnProperty.call(newCharacter.abilities, key)) {
            newCharacter.abilities[key] = Math.floor(Math.random() * 10 + 8);
          }
        }
      }
      if (classNumber === 2) {
        for (const key in newCharacter.abilities) {
          if (Object.hasOwnProperty.call(newCharacter.abilities, key)) {
            newCharacter.abilities[key] = Math.floor(Math.random() * 10 + 8);
          }
        }
      }
      if (classNumber === 3) {
        for (const key in newCharacter.abilities) {
          if (Object.hasOwnProperty.call(newCharacter.abilities, key)) {
            newCharacter.abilities[key] = Math.floor(Math.random() * 10 + 8);
          }
        }
      }
    },

    getAbilities: () => {
      return newCharacter.abilities;
    }
  };

  function createCharacter(classNumber) {
    newCharacter.setAbilities(3);
    let myCharacter = {
      characterName: newCharacter.getName(),
      characterClass: newCharacter.getClass(classNumber),
      abilities: newCharacter.getAbilities()
    };
    return myCharacter;
  }

  let createdCharacter = createCharacter(Math.floor(Math.random() * 4));
  console.log(createdCharacter);
  writeCharacter(createdCharacter);

  function writeCharacter(createdCharacter) {
    document.getElementById(
      "cName"
    ).innerHTML = `${createdCharacter.characterName} (${createdCharacter.characterClass})`;

    document.getElementById("intelligence").innerHTML =
      createdCharacter.abilities.intelligence;

    document.getElementById("wisdom").innerHTML =
      createdCharacter.abilities.wisdom;

    document.getElementById("dexterity").innerHTML =
      createdCharacter.abilities.dexterity;

    document.getElementById("strength").innerHTML =
      createdCharacter.abilities.strength;

    document.getElementById("constitution").innerHTML =
      createdCharacter.abilities.constitution;

    document.getElementById("charisma").innerHTML =
      createdCharacter.abilities.charisma;
  }

  function createOnClick(number) {
    let createdCharacter = createCharacter(number);
    console.log("hola");
    writeCharacter(createdCharacter);
  }

  document.getElementById("mage").addEventListener("click", function() {
    createOnClick(0);
  });

  document.getElementById("warrior").addEventListener("click", function() {
    createOnClick(1);
  });
  document.getElementById("rogue").addEventListener("click", function() {
    createOnClick(2);
  });
  document.getElementById("bard").addEventListener("click", function() {
    createOnClick(3);
  });
};
