import { AppBar, Toolbar, Typography, Container } from "@mui/material"
import BookIcon from '@mui/icons-material/Book';

const Header = () => {
    return (
        <AppBar position="sticky">
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography component="h1" variant="h5" fontWeight="700" sx={{ flexGrow: 1 }}>
                        وبلاگ
                    </Typography>
                    <BookIcon />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header