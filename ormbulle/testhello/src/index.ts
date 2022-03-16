import "reflect-metadata";
import {createConnection, getRepository, TypeORMError, getConnection, getManager} from "typeorm";
// import {User} from "./entity/User";
import {userbase} from "./entity/userbase";
import {friends} from "./entity/friends";

// WARNING si bug, tenter de supprimer la bdd(lié a modif de userbase.ts?)

async function check_username(username: string){
    try{
        const timber = await getRepository(userbase)
        .createQueryBuilder("user")
        .where("user.username = :name", { username })
        .getOneOrFail();
    }
    catch(EntityNotFoundError){
        return false;
    }
    return true;
}

async function add_user(username_p: string, password_p: string, avatar_p: string){
    let online: boolean = true;
    let game: boolean = false;
    // const connection = manager.connection;
    // const entityManager = getManager();
    // await manager.insert(Student, { 
    //     Name: "Student3", 
    //     Age: 14 
    //  });
    // const repo_user = manager.getRepository(userbase);
    if (avatar_p === ""){
        await getConnection()
        .createQueryBuilder()
        .insert()
        .into(userbase)
        .values({
            username: username_p, is_online: true, is_in_game: false, password: password_p }
        )
        .execute();
    }
    else{
        await getConnection()
        .createQueryBuilder()
        .insert()
        .into(userbase)
        .values({
            username: username_p, is_online: true, is_in_game: false, password: password_p, avatar: avatar_p }
        )
        .execute();
    }
}

    // createConnection().then(async connection => {
    // console.log("Inserting a new user into the database...");
    // const user = new userbase();
    // user.username = username;
    // user.is_in_game = false;
    // user.is_online = true;
    // user.password = password;
    // user.avatar = avatar;
    // return true;
    // }

let robert: string = "testeuriator";
let r_mdp:string  = "bebe";
let r_av: string = "";
createConnection().then(async connection => {
    if (false)
        console.log("error");
    else{
        try{
            add_user(robert, r_mdp, r_av);
            console.log("is okay");
        }
        catch(UnhandledPromiseRejectionWarning){
            console.log("is fail");
            console.log(Error);
        }
    };
})


// createConnection().then(async connection => {

//     console.log("Inserting a new user into the database...");
//     const user = new userbase();
//     user.username = "Timber";
//     user.is_in_game = false;
//     user.is_online = true;
//     user.password = "";
//     user.avatar = "";
//     // user.lastName = "Saw";
//     // user.age = 25;
//     const user1 = new userbase();
//     user1.username = "Log";
//     user1.is_in_game = false;
//     user1.is_online = true;
//     user1.password = "";
//     user1.avatar = "";
//     const friendtest = new friends();
//     friendtest.someone = user;
//     friendtest.is_friend_with = user1;
//     await connection.manager.save(user);
//     await connection.manager.save(user1);
//     await connection.manager.save(friendtest);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(userbase);
//     const friendship = await connection.manager.find(friends);
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));
