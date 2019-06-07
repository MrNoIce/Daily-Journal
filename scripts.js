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

let jour = [];

const journalEntryOne = {
  date: "06/01/2019",
  concepts: "Functions and Array methods",
  content: "We learned about how to acurately confuse me in an exciting way!!",
  feels: "Alright"
};

const journalEntryTwo = {
  date: "06/03/2019",
  concepts: "More functions and concepts",
  content: "We learned how to lots of different things",
  feels: "good"
};

const journalEntryThree = {
  date: "06/05/2019",
  concepts: "the dom",
  content:
    "learned how to impliment document.querySelector to inject html into the dom",
  feels: "stressed"
};
jour.push(journalEntryOne, journalEntryTwo, journalEntryThree);

console.log(jour);

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
renderJournalEntries(jour)