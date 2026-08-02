// draggableNode.js
import './css/node-button.css'
import MicrosoftIcon from '@mui/icons-material/Microsoft';

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={`${type} node-button`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      // style={{
      //   cursor: 'grab',
      //   minWidth: '80px',
      //   height: '60px',
      //   display: 'flex',
      //   alignItems: 'center',
      //   borderRadius: '0px',
      //   backgroundColor: '#ffffffff',
      //   justifyContent: 'center',
      //   flexDirection: 'column',
      //   margin: '10px',
      //   border: 'solid 1px black'
      // }}
      draggable
    >
      <span style={{ color: '#000000ff' }}>{label}</span>
      <MicrosoftIcon />
    </div>
  );
};
