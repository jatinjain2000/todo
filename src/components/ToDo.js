import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const WhiteBorderTextField = ({ label, ...props }) => (
  <TextField
    {...props}
    label={label}
    variant="outlined"
    InputProps={{
      style: { color: 'white' },
      classes: {
        notchedOutline: 'white-border',
      },
    }}
    InputLabelProps={{
      style: { color: 'white' },
    }}
  />
);

export default function ToDo() {
  const [task, setTask] = React.useState('');
  const [tasks, setTasks] = React.useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [editIndex, setEditIndex] = React.useState(null);

  const navigate = useNavigate();

  React.useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      if (editIndex !== null) {
        
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = task;
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, task]);
      }
      setTask('');
    }
  };

  const handleEditTask = (index) => {
    
    setTask(tasks[index]);
    setEditIndex(index);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    setEditIndex(null); 
  };

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }} style={{ marginTop: '40px' }}>
      <WhiteBorderTextField
        id="outlined-basic"
        label="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Fab color="primary" aria-label="add" onClick={handleAddTask}>
        <AddIcon />
      </Fab>

      {tasks.map((t, index) => (
        <div key={index} style={{marginTop: '10px' , margin:"auto"}}>
          <TextField style={{marginTop:"1rem"}}
            value={t}
            InputProps={{
              readOnly: true,
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white' },
            }}
            variant="outlined"
          />
          
          <Fab color="secondary" aria-label="edit" style={{marginRight:"1rem" , marginLeft:"1rem",marginTop:"1rem"}} onClick={() => handleEditTask(index)}>
            <EditIcon />
          </Fab>
          <Fab aria-label="delete" style={{marginRight:"1rem" ,marginTop:"1rem"}} onClick={() => handleDeleteTask(index)}>
            <DeleteIcon />
          </Fab>
          
        </div>
      ))}
    </Box>
  );
}
