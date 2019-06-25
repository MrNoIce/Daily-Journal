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
        <button id="delete">Delete</button>
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
// let radioButton = document.getElementsByName("choose")[1].value

// console.log(radioButton)
// radioButton.addEventListener("click", event => {
//     const mood = event.target.value
//     mood.forEach(element => {
//         console.log(element)
//     });
//     console.log(mood)
// })


const radioBtns = document.getElementsByName("moodFilter");   
//Grabs all radio buttons by name attribute on input radio fields//

radioBtns.forEach( radioBtn => { 
    //For Each loop, so addeventlister is added to all radio buttons//
    radioBtn.addEventListener("click", event => { 
        // FYI radioBtn is the individual button, it was the variable declared in the for each loop
        const mood = event.target.value; 
        // stores value of radio button, later used for filter
        fetch("http://localhost:8088/journalEntries") // Fetch from the API
            .then(journalEntries => journalEntries.json())  // Parse as JSON
            .then(entries => {
        console.log(entries)
        times.innerHTML = "";
        let filteredEntry = entries.filter( entry => entry.feels === mood) 
                console.log(filteredEntry)
        renderJournalEntries(filteredEntry)// What should happen when we finally have the array?
    })
        //your get journal entires function
        //.then(entries => { 
            //.then to say "Once you get journal entries, turn them into objects"
           
          // clear your journal entry container to prepare for posting filtered entries
          //filter through entries by mood, (this is where you use the saved mood variable), then save new created array of filtered objects in variable
          
          //Take filtered object variable, and use your insert component function and pass variable into insert component function
        //})
    })
});

function deleteEntry(id) {
fetch(`http://localhost:8088/resource/${id}`, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json"
    }
})
.then(res => res.json())
}