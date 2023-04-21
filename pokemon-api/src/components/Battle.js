import React, { useState, useEffect } from "react";

const Battle = ({ enemy, player, setClickedLocation }) => {
  console.log("enemy", enemy);
  console.log("player", player);
  const [enemyHpLeft, setEnemyHpLeft] = useState([enemy.stats[0].base_stat]);
  const [fainted, setFainted] = useState(false);
  const [playerHpLeft, setPlayerHpLeft] = useState([player.stats[0].base_stat]);
  const [turn, setTurn] = useState(true);
  const [turnMessage, setTurnMessage] = useState("");
  const [animate, setAnimate] = useState(false);

  console.log("enemyHP", enemy.stats[0].base_stat);

  let currentFighter = turn ? enemy : player;

  useEffect(() => {
    if (enemyHpLeft === undefined || playerHpLeft === undefined) {
      setEnemyHpLeft({ enemyHpLeft });
      setPlayerHpLeft({ playerHpLeft });
    }
  }, []);

  function happenings() {
    if (fainted) {
      return "Game Over!";
    } else {
      let playerName = `${player.name.charAt(0).toUpperCase() + player.name.slice(1)}'s turn`
      let enemyName = `${enemy.name.charAt(0).toUpperCase() + enemy.name.slice(1)}' turn`
      let message = `${turn ? enemyName : playerName}`;
      return message;
    }
  }

  function handleAttackClick() {
    if (enemyHpLeft <= 0 || playerHpLeft <= 0) return;

    let message;
    let B = enemy.stats[1].base_stat;
    let D = player.stats[2].base_stat;
    let Z = Math.floor(Math.random() * (217 - 255 + 1)) + 217;
    let damageEnemyAttack = ((((2 / 5 + 2) * B * 60) / D / 50 + 2) * Z) / 255;
    let B1 = enemy.stats[1].base_stat;
    let D1 = player.stats[2].base_stat;
    let Z1 = Math.floor(Math.random() * (217 - 255 + 1)) + 217;
    let damagePlayerAttack = ((((2 / 5 + 2) * B1 * 60) / D1 / 50 + 2) * Z1) / 255;
    let total;

    currentFighter = turn ? enemy : player;

    // enemy turn
    if (turn) {
      total = Math.floor(playerHpLeft - damageEnemyAttack);
      if (total <= 0) {
        setFainted(true);
        setPlayerHpLeft(0);
        message = "Game Over!";
        setTurnMessage(message);
        return;
      } else {
        setPlayerHpLeft(total);
        setAnimate(!animate)
      }
    } else {
      total = Math.floor(enemyHpLeft - damagePlayerAttack);
      if (total <= 0) {
        setFainted(true);
        setEnemyHpLeft(0);
        message = "Game Over!";
        setTurnMessage(message);
        return;
      } else {
        setEnemyHpLeft(total);
      }
    }
    setTurn(!turn);
    setTurnMessage(message);
  }

  return (
    <div>
      <div class="battle">
        <h1>The battle begins!</h1>

        <div id="battlePokeDiv">
          <div class="enemyPokemon"
          >
            <h2>{enemy.name.charAt(0).toUpperCase() + enemy.name.slice(1)}</h2>
            <img
              style={{ imageRendering: "pixelated" }}
              src={enemy.sprites.front_default}
              alt={"pokemon"}
              className={animate ? '': 'shrink'}
            />
            <p class="hp">Enemy HP: {enemyHpLeft}</p>
          </div>

          <div>VS</div>

          <div class="chosenPokemon"
          >
            <h2>{player.name.charAt(0).toUpperCase() + player.name.slice(1)}</h2>
            <img
              style={{ imageRendering: "pixelated" }}
              src={player.sprites.front_default}
              alt={"pokemon"}
              className={animate ? 'shrink' : ''}
            />
            
            <p class="hp">Player HP: {playerHpLeft}</p>
          </div>
        </div>

        <h2>{happenings()}</h2>
        <div>
          <button
            id="attackButton"
            onClick={handleAttackClick}
            
          >
            Attack!
          </button>
          
          
          <p>{turnMessage ? turnMessage : null}</p>
        </div>

        {/* <div>
          <button id='again'
          onClick={setClickedLocation(false)}>
            Play again
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Battle;
