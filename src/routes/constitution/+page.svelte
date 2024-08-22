<script>
    import { dues } from '$lib/utils/helper';
    let one, oneOne, oneOneOne, oneTwo, oneTwoOne, oneTwoTwo, oneTwoThree, oneTwoFour, oneTwoFive, oneThree, oneFour, oneFive;
    let two, twoOne, twoTwo, twoThree;
    let three, threeOne;
    let four, fourOne, fourTwo, fourThree;
    let five, fiveOne, fiveTwo;
    let six, sixOne, sixTwo, sixThree;
    let seven, sevenOne, sevenTwo, sevenThree;

    const goToSection = (section) => {
        const top = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({left: 0, top, behavior: 'smooth'});
    }
</script>

<style>
    .constitution {
        position: relative;
        z-index: 1;
        width: 92%;
        max-width: 800px;
        margin: 8em auto 10em;
    }

    h1 {
        font-size: 2em;
        line-height: 1.2em;
        text-align: center;
        margin: 2em 0 1.5em;
    }

    h2 {
        font-size: 1.5em;
        line-height: 1.2em;
    }

    h3 {
        text-decoration: underline;
        font-size: 1.3em;
        line-height: 1.2em;
    }

    h4 {
        text-decoration: underline;
        margin-left: 2em;
        font-size: 1.2em;
        line-height: 1.2em;
    }

    h5 {
        margin-left: 6em;
        font-size: 0.8em;
        line-height: 1.1em;
    }

    .subBlock {
        margin-left: 2.4em;
    }

    .sectionHeading {
        margin: 4em 0 1.5em;
    }

    .subSectionHeading {
        margin: 1.5em 0 1.5em;
    }

    .underscore {
        text-decoration: underline;
    }

    .right {
        text-align: right;
    }

    .positionMaximums td {
        min-width: 3em;
    }

    .noUnderscore {
        text-decoration: none;
    }

    .clickable {
        cursor: pointer;
    }

    .clickable:hover {
        color: #00316b;
    }

    p {
        color: #777;
    }
</style>

<div class="constitution">
    <h1 class="noUnderscore">CHYONES CONSTITUTION</h1>
    
    <h2 class="noUnderscore">Table of Contents</h2>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(one)}>Section 1: League Settings</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneOne)}>1.1 Roster</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneTwo)}>1.2 Playoffs</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneThree)}>1.3 Waiver Wire</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneFour)}>1.4 Trade Deadline</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(two)}>Section 2: Drafting</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoOne)}>2.1 Setup</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoTwo)}>2.2 Location</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(three)}>Section 3: Scoring</h3>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(four)}>Section 4: League Finances</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourOne)}>4.1 Buy In</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourTwo)}>4.2 Payout</h4>    

    <h3 class="noUnderscore clickable" on:click={() => goToSection(five)}>Section 5: Punishments</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveOne)}>5.1 League Loser</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveTwo)}>5.2 Draft Absences</h4>   
    
    <hr />
    
    <h2 class="sectionHeading" bind:this={one}>Section 1 League Settings</h2>
    
    <h3 class="subSectionHeading" bind:this={oneOne}>1.1 Roster</h3>
    
    <p>14 Total Players</p>
    
    <p class="underscore">Starters</p>
    <ul>
        <li>QB</li>
        <li>RB</li>
        <li>RB</li>
        <li>WR</li>
        <li>WR</li>
        <li>TE</li>
        <li>FLEX (W/R/T)</li>
        <li>K</li>
        <li>DEF</li>
    </ul>
    
    <p>4 Bench</p>

    <p>1 IR Spot</p>
    
    <h3 class="subSectionHeading" bind:this={oneTwo}>1.2 Playoffs</h3>
    
    <p>Playoffs will consist of 8 teams starting week 15.</p>    
    
    <h3 bind:this={oneThree}>1.3 Waiver Wire</h3>
    
    <p>Waiver order is determined by reverse standings. Waivers clear Wednesday (3 AM EDT)</p>

    <p>Waiver Time is 2 Days - Players stay on the waivers for 2 days</p>

    <h3 bind:this={oneFour}>1.4 Trade Deadline</h3>
    
    <p>Week 11 - Trades are not allowed after week 11</p>
    
    <h2 class="sectionHeading" bind:this={two}>Section 2 Drafting</h2>

    <h3 bind:this={twoOne}>2.1 Setup</h3>

    <p>The draft type is snake.</p>
    
    <p>The draft order each year will be determined by Scott Hansen?.</p>

    <h3 bind:this={twoTwo}>2.2 Location</h3>

    <p>The location of the next draft will be determined by the winner of the League.</p>

    <h2 class="sectionHeading" bind:this={three}>Section 3 Scoring</h2>

    <p class="underscore">Passing</p>
    <ul>
        <li>Passing Yards: +0.04 per yard (25 yards = 1 point)</li>
        <li>Passing TD: +4</li>
        <li>2-Pt Conversion: +2</li>
        <li>Pass Intercepted: -1</li>
    </ul>

    <p class="underscore">Rushing</p>
    <ul>
        <li>Reception: +0.50</li>
        <li>Passing Yards: +0.1 per yard (10 yards = 1 point)</li>
        <li>Receiving TD: +6</li>
        <li>Receiving 1st Down: 0.50</li>
        <li>2-Pt Conversion: +2</li>
    </ul>

    <p class="underscore">Receiving</p>
    <ul>
        <li>Passing Yards: +0.1 per yard (10 yards = 1 point)</li>
        <li>Rushing TD: +6</li>
        <li>Rushing 1st Down: 0.50</li>
        <li>2-Pt Conversion: +2</li>
    </ul>

    <p class="underscore">Kicking</p>
    <ul>
        <li>FG Made (0-19 yards): +3</li>
        <li>FG Made (20-29 yards): +3</li>
        <li>FG Made (30-39 yards): +3</li>
        <li>FG Made (40-49 yards): +4</li>
        <li>FG Made (50+ yards): +5</li>
        <li>PAT Made: +1</li>
        <li>FG Missed: -1</li>
        <li>PAT Missed: -1</li>
    </ul>

    <p class="underscore">Team Defense</p>
    <ul>
        <li>Defense TD: +6</li>
        <li>Points Allowed 0: +10</li>
        <li>Points Allowed 1-6: +7</li>
        <li>Points Allowed 7-13: +4</li>
        <li>Points Allowed 14-20: +1</li>
        <li>Points Allowed 28-34: -1</li>
        <li>Points Allowed 35+: -4</li>
        <li>Sacks: +1</li>
        <li>Interceptions: +2</li>
        <li>Fumble Recovery: +2</li>
        <li>Safety: +2</li>
        <li>Forced Fumble: +1</li>
        <li>Blocked Kick: +2</li>
    </ul>

    <h2 class="sectionHeading" bind:this={four}>Section 4 League Finances</h2>
    
    <h3 bind:this={sevenOne}>4.1 Buy In</h3>
    <p>League buy In is $200.</p>
    
    <h3 bind:this={sevenTwo}>4.2 Payout</h3>
    <p>League payout is structured as follows:</p>
    <ul>
        <li>1st place: {((dues * 14) - dues - (dues * 0.25)) * 0.65}$</li>
        <li>2nd place: {((dues * 14) - dues - (dues * 0.25)) * 0.25}$</li>
        <li>3rd place: {((dues * 14) - dues - (dues * 0.25)) * 0.10}$</li>
        <li>Regular season winner: {dues}$</li>
        <li>Weekly high score: {dues * 0.25}$</li>
    </ul>

    <h2 class="sectionHeading" bind:this={five}>Section 5 Punishments</h2>

    <h3 bind:this={fiveOne}>5.1 League Loser</h3>
    <p>All members of the league will submit a punishment to the commissioner. At then end of the season the last place manager will choose three from the list.</p>
    
    <p>The winner of the league will choose from these three which punishment the loser must complete before the draft next season.</p>

    <h3 bind:this={fiveTwo}>5.2 Draft Absences</h3>
    <p>All members of the league are expected to participate and be present at the draft location on draft day. Sometimes life happens, so after 2 repeated no shows their continued presence will be put to a vote</p>
    
    <p>Should they be granted leniency, pending any league sanctions such as added punishments, they will be given another chance. After 3 no shows league removal is automatic.</p>

</div>
