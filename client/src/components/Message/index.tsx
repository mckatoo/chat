import * as Styles from './styles'
import io from 'socket.io-client'

const socket = io('http://localhost:8000')
socket.on('connect', () => {
  console.log(`Usuário conectando com id: `)
})

const Message = () => (
  <Styles.Wrapper>
    <Styles.Input />
  </Styles.Wrapper>
)

export default Message
