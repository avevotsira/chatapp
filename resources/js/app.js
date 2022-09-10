import axios from "axios";
import "./bootstrap";

const messages_el = document.getElementById("message");
const username_input = document.getElementById("username");
const message_input = document.getElementById("message_input");
const message_form = document.getElementById("message_form");

message_form.addEventListener("submit", function (e) {
    e.preventDefault();

    let has_error = false;

    if (username_input.value == "") {
        alert("please enter username");
        has_error = true;
    }
    if (message_input.value == "") {
        alert("please enter Msg");
        has_error = true;
    }
    if (has_error) {
        return;
    }
    const option = {
        method: "post",
        url: "/send-message",
        data: {
            username: username_input.value,
            message: message_input.value,
        },
    };
    axios(option);
});

window.Echo.channel("chat").listen(".message", (e) => {
    messages_el.innerHTML +=
        '<div class="message"><strong>' +
        e.username +
        ":</strong>" +
        e.message +
        "</div>";
});
