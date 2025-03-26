'use client';

import { useState } from 'react';
import { 
  TextField, 
  Button, 
  List, 
  ListItemText, 
  Grid, 
  Box, 
  IconButton, 
  Card, 
  CardContent, 
  Typography 
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const TodoList = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleClearTasks = () => {
    setTasks([]);
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 500,
        margin: 'auto',
        mt: 6,
        p: 2,
        borderRadius: 2,
        backgroundColor: '#f4f4f9',
        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
      }}
    >
      {/* 標題 */}
      <Typography
        variant="h4"
        component="h1"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: '#333',
          letterSpacing: 1,
          mb: 2,
        }}
      >
        To-Do List
      </Typography>

      {/* 新增任務輸入框 */}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={9}>
          <TextField
            fullWidth
            label="Add a new task"
            variant="outlined"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            InputProps={{
              sx: {
                borderRadius: 2,
                backgroundColor: '#fff',
              },
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <IconButton
            color="primary"
            onClick={handleAddTask}
            sx={{
              '&:hover': {
                transform: 'scale(1.1)',
                transition: '0.2s ease',
              },
            }}
          >
            <AddCircleIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Grid>
      </Grid>

      {/* 顯示待辦事項 */}
      <List sx={{ mt: 3 }}>
        {tasks.map((task, index) => (
          <Card key={index} sx={{ mb: 1, borderRadius: 2, backgroundColor: '#fff' }}>
            <CardContent
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 16px',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              <ListItemText primary={task} sx={{ fontSize: '16px' }} />
              <IconButton
                color="error"
                onClick={() => setTasks(tasks.filter((_, i) => i !== index))}
              >
                <DeleteForeverIcon />
              </IconButton>
            </CardContent>
          </Card>
        ))}
      </List>

      {/* 清空列表按鈕 */}
      {tasks.length > 0 && (
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={handleClearTasks}
          sx={{
            mt: 2,
            borderRadius: 2,
            backgroundColor: '#ff1744',
            '&:hover': {
              backgroundColor: '#f01440',
            },
          }}
        >
          Clear All
        </Button>
      )}
    </Box>
  );
};

export default TodoList;
