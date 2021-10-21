const cron = require("node-cron");
const shell  = require ("shelljs");

cron.schedule("*/2 * * * * *", function(){
    console.log("Schedular running....");
    if (shell.exec("node kk.js").code !=0){
        console.log("Somthing went Wrong...")
    }
})