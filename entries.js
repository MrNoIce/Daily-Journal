document.querySelector("#submit-btn").addEventListener("click", () => {
  let date = document.querySelector("#journalDate").value;
  let concepts = document.querySelector("#concepts").value;
  let entry = document.querySelector("#entry").value;
  let feels = document.querySelector("#feels").value;
  let newForm = {
    date: date,
    concepts: concepts,
    entry: entry,
    feels: feels
  };
  addNewJournalEntry(newForm);
});
function addNewJournalEntry(create) {
  fetch("http://localhost:8088/journalEntries", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(create)
  });
}
