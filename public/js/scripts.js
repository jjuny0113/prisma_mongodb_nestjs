const socket = io('/chattings');
class DrawDom {
  drawHelloStranger(username) {
    this.helloStrangerElement.innerText = `Hello ${username} Stranger :)`;
  }

  drawNewChat = (message) => {
    const wrapperChatBox = document.createElement('div');
    const chatBox = `
    <div>
    ${message}
    </div>
    `;
    wrapperChatBox.innerHTML = chatBox;
    this.chattingBoxElement.append(wrapperChatBox);
  };

  getElementById(id) {
    return document.getElementById(id) || null;
  }

  get helloStrangerElement() {
    return this.getElementById('hello_stranger');
  }

  get chattingBoxElement() {
    return this.getElementById('chatting_box');
  }

  get formElement() {
    return this.getElementById('chat_form');
  }
}

class SocketUtil {
  #socket;
  #drawDom;
  constructor(socket, drawDom) {
    this.#socket = socket;
    this.#drawDom = drawDom;
  }

  on = () => {
    this.#socket.on('user_connected', (username) => {
      const drawDom = new DrawDom();
      drawDom.drawNewChat(`${username} is connected`);
    });
    this.#socket.on('new_chat', (data) => {
      const { chat, username } = data;
      const drawDom = new DrawDom();
      drawDom.drawNewChat(`${username}: ${chat}`);
    });
    this.#socket.on('disconnect_user', (username) => {
      const drawDom = new DrawDom();
      drawDom.drawNewChat(`${username} 잘가!!`);
    });
  };
  handleNewUser(username) {
    this.#socket.emit('new_user', username, (data) => {
      this.#drawDom.drawHelloStranger(data);
    });
  }
  handleHelloUser() {
    this.#socket.on('hello_user', (data) => {
      console.log(data);
    });
  }

  handleSubmitChat(value) {
    this.#socket.emit('submit_chat', value);
  }
}

class EventHandler {
  #drawDom;
  #socketUtil;
  constructor(drawDom, socketUtil) {
    this.#drawDom = drawDom;
    this.#socketUtil = socketUtil;
  }
  helloUser = () => {
    const username = prompt('너 이름이 뭐니?');
    this.#socketUtil.handleNewUser(username);
    this.#socketUtil.handleHelloUser();
  };
  handleSumbit = (event) => {
    event.preventDefault();
    const inputValue = event.target.elements[0].value;

    if (inputValue !== '') {
      this.#socketUtil.handleSubmitChat(inputValue);

      this.#drawDom.drawNewChat(inputValue);
      event.target.elements[0].value = '';
    }
  };
}

const drawDom = new DrawDom();
const socketUtil = new SocketUtil(socket, drawDom);
const events = new EventHandler(drawDom, socketUtil);

socketUtil.on();

function init() {
  events.helloUser();
  // 이벤트 연결
  drawDom.formElement.addEventListener('submit', events.handleSumbit);
}

init();
