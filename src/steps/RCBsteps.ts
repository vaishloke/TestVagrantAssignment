// import { RCBTeamValidation } from "../pages/RCBPage";

const I = actor()

Given("This is the team of RCB", async function () {
    console.log("This is the team of RCB");
    I.wait(5);
    validateForeignWicketKeeper(" ");
    // await RCBTeamValidation.TeamDetails()
    //uncomment the topmost import statement & comment the above line & function validateForeignWicketKeeper
})

Given("Cricket board validates that the RCB team has atleast 1 wicketkeeper", async function () {
    console.log("Cricket board is validating that the RCB team has atleast 1 wicketkeeper")
    validateForeignWicketKeeper("keeper");
    // await RCBTeamValidation.validateWicketKeeperPresence()
    //uncomment the topmost import statement & comment the above line & function validateForeignWicketKeeper
})

Given("Cricket board validates that the RCB team has only 4 foreign players", async function () {
    console.log("Cricket board is validating that the RCB team has only 4 foreign players")
    validateForeignWicketKeeper("foreign");
    //  await RCBTeamValidation.validateForeignPlayersPresence()
    //uncomment the topmost import statement & comment the above line & function validateForeignWicketKeeper
})



async function validateForeignWicketKeeper(validate) {
    var a = {
        "name": "Royal Challengers Bangalore",
        "location": "Bangalore",
        "player": [
            {
                "name": "Faf Du Plessis",
                "country": "South Africa",
                "role": "Batsman",
                "price-in-crores": "7"
            },
            {
                "name": "Virat Kohli",
                "country": "India",
                "role": "Batsman",
                "price-in-crores": "15"
            },
            {
                "name": "Glenn Maxwell",
                "country": "Australia",
                "role": "Batsman",
                "price-in-crores": "11"
            },
            {
                "name": "Mohammad Siraj",
                "country": "India",
                "role": "Bowler",
                "price-in-crores": "7"
            },
            {
                "name": "Harshal Patel",
                "country": "India",
                "role": "Bowler",
                "price-in-crores": "10.75"
            },
            {
                "name": "Wanindu Hasaranga",
                "country": "Srilanka",
                "role": "Bowler",
                "price-in-crores": "10.75"
            },
            {
                "name": "Dinesh Karthik",
                "country": "India",
                "role": "Wicket-keeper",
                "price-in-crores": "5.5"
            },
            {
                "name": "Shahbaz Ahmed",
                "country": "India",
                "role": "All-Rounder",
                "price-in-crores": "2.4"
            },
            {
                "name": "Rajat Patidar",
                "country": "India",
                "role": "Batsman",
                "price-in-crores": "0.20"
            },
            {
                "name": "Josh Hazlewood",
                "country": "Australia",
                "role": "Bowler",
                "price-in-crores": "7.75"
            },
            {
                "name": "Mahipal Lomror",
                "country": "India",
                "role": "Bowler",
                "price-in-crores": "7.75"
            }
        ]
    }

    var TotalPlayers = a.player;
    console.log(JSON.stringify(TotalPlayers));
    console.log(" ")
    console.log("******************************")

    console.log("Total no of players " + TotalPlayers.length)
    console.log(" ")
    if (validate.includes("foreign")) {
        var noOfForeignPlayers = 0;

        for (var i = 0; i < TotalPlayers.length; i++) {
            var eachPlayer = JSON.stringify(TotalPlayers[i])
            if (eachPlayer.includes("India")) {
                console.log("Player " + i + " is Indian")
            }
            else {
                noOfForeignPlayers += 1;
                console.log("foreign player is " + eachPlayer)
            }
            if (noOfForeignPlayers > 4) {
                console.log("There more than 4 foreign players")

            }
            if (noOfForeignPlayers <= 4 && i == (TotalPlayers.length - 1)) {
                console.log("The team is not having more then 4 foreign players")

            }
        }
    }

    if (validate.includes("keeper")) {
        for (var i = 0; i < TotalPlayers.length; i++) {
            var eachPlayer = JSON.stringify(TotalPlayers[i])
            if (eachPlayer.includes("Wicket-keeper")) {
                console.log(`The team has atleast one wicketkeeper and he is ${eachPlayer}`);
                break;
            }
        }

    }


}

