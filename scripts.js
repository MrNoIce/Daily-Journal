/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
// const objectsJournalEntry = {
//     date: "",
//     concepts: "",
//     content: "",
//     feels: ""
// }



fetch("http://localhost:8088/journalEntries") // Fetch from the API
    .then(journalEntries => journalEntries.json())  // Parse as JSON
    .then(entries => {
        console.log(entries)
        renderJournalEntries(entries)// What should happen when we finally have the array?
    })



const makeJournalEntryComponent = function (journalEntry) {
  
    // Create your own HTML structure for a journal entry
    return `
        <div class="journalEntry">
            <h1>${journalEntry.date}</h1>
            <section>${journalEntry.concepts}</section>
            <section>${journalEntry.content}</section>
            <section>${journalEntry.feels}</section>
        </div>
    `;
};
let times = document.querySelector('.entryLog')
const renderJournalEntries = (taco) => {
    for (let i = 0; i < taco.length; i++) {
        const journey = taco[i]
        times.innerHTML += makeJournalEntryComponent(
            journey
        )
    }
}

// Invoke the render function
