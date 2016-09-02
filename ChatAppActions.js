
import {BaseActions} from './utils';

const ChatAppActions = {
  ...BaseActions,
  default: () => ({type: 'CHAT_LIST'}),
  chatList: () => ({type: 'CHAT_LIST'}),
  chat: ({name, embedded}) => ({type: 'CHAT', name, embedded}),
};

module.exports = ChatAppActions;
