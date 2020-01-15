import * as path from "path";
import express from "express";
import uuid from 'uuid';

class Client {
  public name: string;
  public password: string;
  public token: string;
  public signIn: boolean;

  constructor(name: string, password: string) {
    this.name = name;
    this.password = password;
    this.token = '';
    this.signIn = false;
  }
}

class Score {
  public name: string;
  public score: number;
  public index: number;
  public message: string;
  constructor(name: string, score: number, message: string) {
    this.name = name;
    this.score = score;
    this.index = 0;
    this.message = message;
  }
}

export class Server {
  private app: express.Express;
  public clients: Array<Client>;
  public ranking: Array<Score>;
  constructor() {
    this.clients = new Array<Client>();
    this.ranking = new Array<Score>();
    this.app = express();
    this.app.use(express.static(path.join(__dirname, '../dist/pacman')));
    this.app.use(express.json());

    this.app.get('/scoreboard', (req, res) => {
      this.clients.forEach(element => {
        if (element.token === req.header('Authorization')) {
          const responseBody = {
            ranking: this.ranking
          }
          const responseBodyTemp = JSON.stringify(responseBody);
          res.send(responseBodyTemp);
        }
      });
    });

    this.app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../../client/pacman/dist/pacman", "index.html"));
    });

    this.app.post('/signin', (req, res) => {
      let isValid = false;
      this.clients.forEach(element => {
        if (element.name === req.body.username && element.password === req.body.password) {
          element.signIn = true;
          element.token = uuid() as string;
          res.status(200).json({ token: element.token });
          console.log('sign in' + element.name);
          isValid = true;
        }
      });
      if (isValid === false) {
        res.status(403).json({ reason: 'wrong credentials' });
      }
    });

    this.app.post('/register', (req, res) => {
      if (req.body.username.length > 0 &&
        req.body.password.length > 0) {
        console.log('register: ' + req.body.username);
        this.clients.push(new Client(req.body.username, req.body.password));
        res.status(200).json({ result: 'registered' });
      } else {
        res.status(403).json({ reason: 'wrong input' });
      }
    });

    this.app.post('/score', (req, res) => {
      let contains = false;
      this.clients.forEach(element => {
        if (element.token === req.header('Authorization')) {
          this.ranking.forEach(score => {
            if (score.score === req.body.score) {
              contains = true;
            }
          });
          if (!contains) {
            this.ranking.push(new Score(element.name, req.body.score, req.body.message));
          }

        }
      });

      let sortedArray: { score: number; name: string, message: string }[] = this.ranking.sort((n1, n2) => {
        if (n1.score < n2.score) {
          return 1;
        }

        if (n1.score > n2.score) {
          return -1;
        }

        return 0;
      });

      this.ranking = new Array<Score>();
      let counter = 1;
      sortedArray.forEach(element => {
        if (counter < 10) {
          let elementTemp = new Score(element.name, element.score, element.message);
          elementTemp.index = counter;
          this.ranking.push(elementTemp);
        }

        counter++;
      });
    });

    this.app.listen(3000, () => console.log('started at http://localhost:3000/'));
  }
}

let server: Server = new Server();

