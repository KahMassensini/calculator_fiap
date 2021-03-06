import {
  addNoteToList,
  loadNotesFromStorage,
  saveNotesToStorage,
} from "./notesServices.js";

const form = document.querySelector("#form-notes");
const inputCpf = document.querySelector("#input-cpf");

window.addEventListener("unload", saveNotesToStorage);

window.addEventListener("load", loadNotesFromStorage);

const cleanForm = () => form.reset();

const handleSubmit = (event) => {
  event.preventDefault();

  const dateNow = new Date();

  const newNote = {
    id: dateNow.getTime(),
    date: dateNow,
    text: inputCpf.value,
  };

  addNoteToList(newNote);

  cleanForm();
};

form.addEventListener("submit", handleSubmit);
