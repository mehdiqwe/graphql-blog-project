import { Grid, Typography, TextField, Button } from "@mui/material"
import LoadingButton from '@mui/lab/LoadingButton';
import { useState, useEffect } from "react"
import { useMutation } from "@apollo/client/react"
import { SEND_COMMENT } from "../../graphql/mutations"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CommentForm = ({ slug }) => {
    const [value, setValue] = useState({
        name: "",
        email: "",
        text: "",
    })

    const [sendComment, { loading, data, error, called }] = useMutation(SEND_COMMENT, {
        variables: {
            name: value.name,
            email: value.email,
            text: value.text,
            slug,
        }
    })

    useEffect(() => {
        if (data) {
            toast.success("کامنت ارسال و منتظر تایید می باشد", {
                position: "top-center",
            })
        }
    }, [loading])

    const changeHandler = (e) => {
        const value = e.target.value
        const name = e.target.name
        setValue(prev => ({ ...prev, [name]: value }))
    }

    const clickHandler = () => {
        if (value.name && value.email && value.text) {
            sendComment()
        } else {
            toast.warn("!تمام فیلد هارا پر کنید", {
                position: "top-center",
            })
        }
    }

    return (
        <Grid container sx={{ boxShadow: "rgba(0 0 0 / 0.1) 0px 4px 12px", borderRadius: 4, py: 1, mt: 5 }}>
            <Grid item xs={12} m={2}>
                <Typography component="p" variant="p" color="primary" fontWeight={700}>
                    ارسال کامنت
                </Typography>
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField
                    sx={{
                        "& label": {
                            left: "unset",
                            right: "1.75rem",
                            transformOrigin: "right",
                            fontSize: "1rem",
                        },
                        "& legend": {
                            textAlign: "right",
                            fontSize: "0.73rem",
                        },
                    }}
                    label="نام کاربری"
                    variant="outlined"
                    fullWidth={true}
                    name="name"
                    value={value.name}
                    onChange={changeHandler}
                />
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField
                    sx={{
                        "& label": {
                            left: "unset",
                            right: "1.75rem",
                            transformOrigin: "right",
                            fontSize: "1rem",
                        },
                        "& legend": {
                            textAlign: "right",
                            fontSize: "0.73rem",
                        },
                    }}
                    label="ایمیل"
                    variant="outlined"
                    fullWidth={true}
                    name="email"
                    value={value.email}
                    onChange={changeHandler}
                />
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField
                    sx={{
                        "& label": {
                            left: "unset",
                            right: "1.75rem",
                            transformOrigin: "right",
                            fontSize: "1rem",
                        },
                        "& legend": {
                            textAlign: "right",
                            fontSize: "0.73rem",
                        },
                    }}
                    label="متن کامنت"
                    variant="outlined"
                    fullWidth={true}
                    name="text"
                    value={value.text}
                    onChange={changeHandler}
                    multiline
                    minRows={4}
                />
            </Grid>
            <Grid item xs={12} m={2}>
                {loading ? <LoadingButton loading variant="outlined">
                    Submit
                </LoadingButton>
                    :
                    <Button variant="contained" onClick={clickHandler}>ارسال</Button>
                }
            </Grid>
            <ToastContainer />
        </Grid>
    )
}

export default CommentForm