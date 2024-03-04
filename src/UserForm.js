import {Grid, Typography} from "@mui/material";

const UserForm = props => {
return(
        <Grid
        container
        spacing={2}
        sx={{
            backgroundColor: '#ffffff',
            marginBottom: '30px',
            display: "block",
        }}
        >

            <Grid
             item xs={12}>
            <Typography component={h1} sx={{color: '#000000'}}>User Form</Typography>
                </Grid>
        </Grid>
);

}

export default UserForm;
