/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var playButton = document.getElementById("play-button");
var gameMenu = document.getElementById("menu-container");
var ingame = document.getElementById("game");
var userSubmit = document.getElementById("guessForm-submit");
var userGuess = document.getElementById("guessForm-input");
let game;
let numberOfGuesses = 1;
let userNumber;

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        navigator.vibrate(2000);
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
};

playButton.addEventListener("click", function(clickEvent) {

    gameMenu.className = "hidden";
    ingame.className = "game";
    game = new RandomNumberGame();

});

guessForm.addEventListener("submit", function(submitEvent) {

    submitEvent.preventDefault();

    if (Number.parseInt(userGuess.value)) {
        if (userGuess.value >= 1 && userGuess.value <= 10) {
            userNumber = userGuess.value;
            if (userNumber == game.number) {
                console.log(navigator.vibrate(4000));
                alert("You won! You guessed the correct number in " + numberOfGuesses + " guesses!");
                if (confirm("Would you like to play again?")) {
                    game = new RandomNumberGame();
                    numberOfGuesses = 1;
                } else {
                    // game over
                }
            } else {
                alert("Incorrect, please try again!");
                numberOfGuesses++;
            }
        } else {
            alert("Your guess must be between 1 and 10!");
        }
    } else {
        alert("You must enter an integer!");
    }

});

class RandomNumberGame {

    number;

    constructor() {
        this.number = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    }

}

app.initialize();