// this needs to have a starting function that connects to the prompt

function beginPrompt () {
    inquirer.prompt(options)
    .then((answers) => {
// connect function that recieves the info and gets/posts the corresponding table from sql.
    })
    .catch(err => {
        console.log(err)
    });

};
beginPrompt();