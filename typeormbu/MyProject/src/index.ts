import "reflect-metadata";
import {createConnection} from "typeorm";
import { QueryFailedError } from 'typeorm';
import {User} from "./entity/User";
import {v4 as uuidv4} from 'uuid';


createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber2";
    user.lastName = "Saw";
    user.uuid = uuidv4();
    user.age = 25;
    try {
        await connection.manager.save(user);
      } catch (err) {
        console.log("error");
      }

    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
