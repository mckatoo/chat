import * as Styles from './styles'
import Main from 'components/Main'
import Users from 'components/Users'
import Message from 'components/Message'

const Chat = () => (
  <Styles.Wrapper>
    <Main />
    <Users />
    <Message />
  </Styles.Wrapper>
)

export default Chat
