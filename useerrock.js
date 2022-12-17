const xmpp = require("simple-xmpp");

xmpp.on("online", data=>{
    console.log("Your are online")
    console.log(`Connected as ${data.jid}`)
    xmpp.acceptSubscription("admin@localhost");
    send();
})

xmpp.on('chatstate', function(from, state) {
	console.log('% is currently %s', from, state);
});

function send(){
    setTimeout(send, 5000);
    xmpp.send("admin@localhost", `hi! ${Date.now()}`)
}

xmpp.on("error", error => console.log("something went wrong!"+error))

xmpp.on("chat", (from, message)=>{
    console.log(`Got a message! ${message} from ${from}`)
})

xmpp.connect({
    "jid": "rocks@localhost",
    "password": "password",
    "host": "localhost",
    "port": 5222
})