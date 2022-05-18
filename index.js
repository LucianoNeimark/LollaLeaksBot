import { TwitterApi } from "twitter-api-v2";
import Cron from "node-cron";

import dotenv from "dotenv";
dotenv.config();

console.log(process.env.APPKEY);

const client = new TwitterApi({
  appKey: process.env.APPKEY,
  appSecret: process.env.APSECRET,
  accessToken: process.env.ACCESSTOKEN,
  accessSecret: process.env.ACCESSSECRET,
});

const rwClient = client.readWrite;

const nameList = [
  ["La Mona Gimenes", "F"],
  ["Luquitas Rodriguez", "M"],
  ["Lilita Carrio", "F"],
  ["Macri", "M"],
  ["Lali Esposito", "F"],
  ["Alberto Fernandez", "M"],
  ["Vicente Viloni", "M"],
  ["El negro de Whatsapp", "M"],
  ["Hasbulla", "M"],
  ["Jorge Macri", "M"],
  ["Javier Milei", "M"],
  ["Migue Granados", "M"],
  ["Miguel Abuelo", "M"],
  ["El chino darin", "M"],
  ["Ricardo Arjona", "M"],
  ["Elon Musk", "M"],
  ["German Beder", "M"],
  ["Dario Barassi", "M"],
  ["Mario Pergolini", "M"],
  ["Marito Baracus", "M"],
  ["Antony Hopkins", "M"],
  ["German Garmendia", "M"],
  ["Nick", "M"],
  ["Gaturro", "M"],
  ["Obama", "M"],
  ["Johny Bravo", "M"],
  ["Esmeralda Mitre", "F"],
  ["Mercedes Sosa", "F"],
  ["Patricia Sosa"],
  ["Jorge Rial", "M"],
  ["Seba Wanraich", "M"],
  ["Wanda Nara", "F"],
  ["Marcelo Tineli", "M"],
  ["Trump", "M"],
  ["Thiago Messi", "M"],
  ["Messi", "M"],
  ["Morgan Freeman", "M"],
  ["El Kun", "M"],
  ["Alfredo Montes de Oca", "M"],
  ["El cantante del kuelgue", "M"],
  ["El nene de mi familia es Jurio", "M"],
  ["Me gusta el arte", "M"],
  ["Liniers", "M"],
  ["El Eternauta", "M"],
]; //Nombres

function getName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

var name = getName();
var body = `${name[0]} confirmad${
  name[1] == "M" ? "o" : "a"
} para el Lollapalooza 2023`;

rwClient.v2.tweet(body);

Cron.schedule("0 0 */5 * * *", () => {
  var name = getName();
  var body = `${name[0]} confirmad${
    name[1] == "M" ? "o" : "a"
  } para el Lollapalooza 2023`;

  rwClient.v2.tweet(body);
  console.log("Tweet sent");
});
