const I = actor();
import { player } from "../testData/RCBTeam.json"

export class RCBTeamValidation {


    static TotalPlayers: any = player;

    static async TeamDetails() {
        console.log("team players are : ")
        console.log(JSON.stringify(this.TotalPlayers));
        console.log(" ")
        console.log("******************************")
    }

    static async validateWicketKeeperPresence() {

        console.log(" ")
        console.log("******************************")

        for (var i = 0; i < this.TotalPlayers.length; i++) {
            var eachPlayer = JSON.stringify(this.TotalPlayers[i])
            if (eachPlayer.includes("Wicket-keeper")) {
                console.log(`The team has atleast one wicketkeeper and he is ${eachPlayer}`);
                break;
            }
        }

    }

    static async validateForeignPlayersPresence() {

        console.log("Total no of players " + this.TotalPlayers.length)
        console.log(" ")
        var noOfForeignPlayers = 0;

        for (var i = 0; i < this.TotalPlayers.length; i++) {
            var eachPlayer = JSON.stringify(this.TotalPlayers[i])
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
            if (noOfForeignPlayers <= 4 && i == (this.TotalPlayers.length - 1)) {
                console.log("The team is not having more then 4 foreign players")

            }
        }

    }
}