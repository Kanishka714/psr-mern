import { Button, Grid, Typography, Input } from "@mui/material";

const UserForm = props => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: '#ffffff',
        marginBottom: '30px',
        display: "block",
      }}
    >

      <Grid item xs={12}>
        <Typography variant="h1" sx={{ color: '#000000' }}>User Form</Typography>
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
        <Typography
          component={'label'}
          htmlFor='id'
          sx={{
            color: '#000000',
            marginRight: 'right',
            fontSize: '16.0',
            width: '100px',
            display: 'block',
          }}
        >
          ID
        </Typography>
        <Input
          type="number"
          id='id'
          name="id"
          sx={{ width: '400px' }}
          value={""}
          onChange={e => { }}
        />
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
        <Typography
          component={'label'}
          htmlFor='name'
          sx={{
            color: '#000000',
            marginRight: 'right',
            fontSize: '16.0',
            width: '100px',
            display: 'block',
          }}
        >
          Name
        </Typography>
        <Input
          type="text"
          id='name'
          sx={{ width: '400px' }}
          value={""}
          onChange={e => { }}
        />
      </Grid>

      <Button
        sx={{
          margin: 'auto',
          marginBottom: '20px',
          backgroundColor: '#00c6ec',
          color: '#000000',
          marginLeft: '15px',
          marginTop: '20px',
          '&:hover': {
            opacity: '0.7',
            backgroundColor: '#00c6ec',
          }
        }}
      >
        Add
      </Button>
    </Grid>
  );
}

export default UserForm;
