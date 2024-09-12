import "./TextInput.css"
export const TextInput = ({message, setMessage, onClick}) => {
  return (
    <form>
        <input type="text" value={message} onChange={e => setMessage(e.target.value)}  placeholder="Type here..."/>
        <button onClick={onClick}>Send</button>
    </form>
  )
}
