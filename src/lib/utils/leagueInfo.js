/*   STEP 1   */
export const leagueID = "1113844872982761472"; // your league ID
export const leagueName = "NYC + SF Fantasy Football"; // your league name
export const dues = 200; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Founded in 2023 the NYC + SF Fantasy Football League (need a better name imo), began as we travelled to Denver Colorado to wear traffic cones and draft players.</p>
  <p>The boys will be traveling to Orlando FL t.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": 994684004831948800,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "johnnimoxx",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "NYC", // (optional)
      "bio": "Lorem ipsum...",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": 994684004831948800,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "NathanVellayan",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "NYC", // (optional)
      "bio": "Lorem ipsum...",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
      // {
      //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      //   "managerID": 997188493384179712,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      //   "name": "nikagarwal",
      //   "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      //   "location": "NYC", // (optional)
      //   "bio": "Lorem ipsum...",
      //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      //   "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      //   "rival": {
      //     name: "Rival", // Can be anything (usually your rival's name)
      //     link: 6, // manager array number within this array, or null to link back to all managers page
      //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      //   },
      //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      //   "philosophy": "Your fantasy team's philosophy",
      //   "tradingScale": 10, // 1 - 10
      //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      // },
      // {
      //   "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      //   "managerID": 997193226853351424,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      //   "name": "vbganapa",
      //   "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      //   "location": "PHI", // (optional)
      //   "bio": "Lorem ipsum...",
      //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      //   "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      //   "rival": {
      //     name: "Rival", // Can be anything (usually your rival's name)
      //     link: 6, // manager array number within this array, or null to link back to all managers page
      //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      //   },
      //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      //   "philosophy": "Your fantasy team's philosophy",
      //   "tradingScale": 10, // 1 - 10
      //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      // },
      // {
      //   "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      //   "managerID": 997196301164974080,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      //   "name": "titobandito94",
      //   "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      //   "location": "NYC", // (optional)
      //   "bio": "Lorem ipsum...",
      //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      //   "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      //   "rival": {
      //     name: "Rival", // Can be anything (usually your rival's name)
      //     link: 6, // manager array number within this array, or null to link back to all managers page
      //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      //   },
      //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      //   "philosophy": "Your fantasy team's philosophy",
      //   "tradingScale": 10, // 1 - 10
      //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      // },
      // {
      //   "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      //   "managerID": 997351925613957120,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      //   "name": "steviejez",
      //   "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      //   "location": "SF", // (optional)
      //   "bio": "Lorem ipsum...",
      //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      //   "favoriteTeam": "lac", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      //   "rival": {
      //     name: "Rival", // Can be anything (usually your rival's name)
      //     link: 6, // manager array number within this array, or null to link back to all managers page
      //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      //   },
      //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      //   "philosophy": "Your fantasy team's philosophy",
      //   "tradingScale": 10, // 1 - 10
      //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      // },
      // {
      //   "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      //   "managerID": 994692260442759168,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      //   "name": "lpmarcich",
      //   "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      //   "location": "NYC", // (optional)
      //   "bio": "Lorem ipsum...",
      //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      //   "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      //   "rival": {
      //     name: "Rival", // Can be anything (usually your rival's name)
      //     link: 6, // manager array number within this array, or null to link back to all managers page
      //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      //   },
      //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      //   "philosophy": "Your fantasy team's philosophy",
      //   "tradingScale": 10, // 1 - 10
      //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      // },
      // {
      //   "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      //   "managerID": 997189413031464960,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      //   "name": "SpencerLevins",
      //   "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      //   "location": "NYC", // (optional)
      //   "bio": "Lorem ipsum...",
      //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      //   "favoriteTeam": "mia", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      //   "rival": {
      //     name: "Rival", // Can be anything (usually your rival's name)
      //     link: 6, // manager array number within this array, or null to link back to all managers page
      //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      //   },
      //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      //   "philosophy": "Your fantasy team's philosophy",
      //   "tradingScale": 10, // 1 - 10
      //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      // },
      // {
      //   "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      //   "managerID": 449651452449648640,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      //   "name": "KevinBrobin",
      //   "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      //   "location": "SF", // (optional)
      //   "bio": "Lorem ipsum...",
      //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      //   "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      //   "rival": {
      //     name: "Rival", // Can be anything (usually your rival's name)
      //     link: 6, // manager array number within this array, or null to link back to all managers page
      //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      //   },
      //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      //   "philosophy": "Your fantasy team's philosophy",
      //   "tradingScale": 10, // 1 - 10
      //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      // },
      // {
      //   "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      //   "managerID": 997351925613957120,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      //   "name": "caswartz",
      //   "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      //   "location": "NYC", // (optional)
      //   "bio": "Lorem ipsum...",
      //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      //   "favoriteTeam": "kc", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      //   "rival": {
      //     name: "Rival", // Can be anything (usually your rival's name)
      //     link: 6, // manager array number within this array, or null to link back to all managers page
      //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      //   },
      //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      //   "philosophy": "Your fantasy team's philosophy",
      //   "tradingScale": 10, // 1 - 10
      //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      // },
      // {
      //   "roster": 11,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      //   "managerID": 997357770930249728,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      //   "name": "MDRoberts1992",
      //   "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      //   "location": "NYC", // (optional)
      //   "bio": "Lorem ipsum...",
      //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      //   "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      //   "rival": {
      //     name: "Rival", // Can be anything (usually your rival's name)
      //     link: 6, // manager array number within this array, or null to link back to all managers page
      //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      //   },
      //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      //   "philosophy": "Your fantasy team's philosophy",
      //   "tradingScale": 10, // 1 - 10
      //  "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      // },
      // {
      //   "roster": 12,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      //   "managerID": 997358174321561600,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      //   "name": "kgeiss1994",
      //   "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      //   "location": "NYC", // (optional)
      //   "bio": "Lorem ipsum...",
      //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      //   "favoriteTeam": "det", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      //   "rival": {
      //     name: "Rival", // Can be anything (usually your rival's name)
      //     link: 6, // manager array number within this array, or null to link back to all managers page
      //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      //   },
      //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      //   "philosophy": "Your fantasy team's philosophy",
      //   "tradingScale": 10, // 1 - 10
      //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      // },
      // {
      //   "roster": 13,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      //   "managerID": 997359698951118848,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      //   "name": "jeffolm",
      //   "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      //   "location": "NYC", // (optional)
      //   "bio": "Lorem ipsum...",
      //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      //   "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      //   "rival": {
      //     name: "Rival", // Can be anything (usually your rival's name)
      //     link: 6, // manager array number within this array, or null to link back to all managers page
      //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      //   },
      //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      //   "philosophy": "Your fantasy team's philosophy",
      //   "tradingScale": 10, // 1 - 10
      //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      // },
      // {
      //   "roster": 14,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      //   "managerID": 997391241903996928,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      //   "name": "wetmoc",
      //   "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      //   "location": "NYC", // (optional)
      //   "bio": "Lorem ipsum...",
      //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      //   "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      //   "rival": {
      //     name: "Rival", // Can be anything (usually your rival's name)
      //     link: 6, // manager array number within this array, or null to link back to all managers page
      //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      //   },
      //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      //   "philosophy": "Your fantasy team's philosophy",
      //   "tradingScale": 10, // 1 - 10
      //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      // },
  ]
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
