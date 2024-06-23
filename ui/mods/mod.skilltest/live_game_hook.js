console.log("ui/mods/mod.skilltest/hook.js: ini")

$(document).ready(function () {
    print("ui/mods/mod.skilltest/live_game_hook.js: ready")
    console.log(model.player().commanders)
    print(model.lobbyId() + " lobby id")


    // delay the message sending to give the panels time to initialize
    _.delay(function () {
        send_live_game_data(["awake"])
    }, 3000)
})

handlers.skilltest_getLiveGameData = function (payload) {
    send_live_game_data(payload.functions_to_call)
}

function send_live_game_data(functions_to_call) {
    var live_game_data ={
        lobbyId: model.lobbyId(),
        commanders: model.player().commanders,
        // Callbacks is basically just an array of names of functions that need to be called. Some functions may ask to call them if something is wrong
        functions_to_call: functions_to_call
    }

    api.Panel.message(api.panels["LiveGame_FloatZone"].id, 'skilltest_liveGameData', live_game_data);
}

function print(message) {
    console.log("[SKILLTEST]" +message)
}