import Loader from "../../shared/Loader"
import CommentForm from "../comment/CommentForm"
import Comments from "../comment/Comments"

import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client/react"

import { GET_BLOG_INFO } from "../../graphql/queries"
import { Avatar, Container, Grid, Typography, Box } from "@mui/material"
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useNavigate } from "react-router-dom"

import sanitizeHtml from "sanitize-html"


const BlogPage = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { loading, data, error } = useQuery(GET_BLOG_INFO, {
    variables: { slug }
  })

  if (loading) return <Loader />

  if (error) return <h3>Something went wrong...</h3>

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} sx={{ display: "flex" }} mt={9}>
          <Typography component="h2" variant="h4" color="primary" fontWeight={700} flex={1}>
            {data.post.title}
          </Typography>
          <ArrowBackRoundedIcon onClick={() => navigate(-1)} sx={{ cursor: "pointer" }} />
        </Grid>
        <Grid item xs={12} mt={6}>
          <img src={data.post.coverPhoto.url} alt={slug} width="100%" style={{ borderRadius: "15px" }} />
        </Grid>
        <Grid item xs={12} mt={7} display="flex" alignItems="flex-end">
          <Avatar src={data.post.author.avatar.url} sx={{ width: "80px", height: "80px", marginLeft: 2 }} />
          <Box component="div">
            <Typography component="p" variant="h5" fontWeight={700}>
              {data.post.author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {data.post.author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={5}>
          <Box component="div" dangerouslySetInnerHTML={{__html: sanitizeHtml(data.post.content.html)}}></Box>
        </Grid>
        <Grid item xs={12}>
          <CommentForm slug={slug}/>
        </Grid>
        <Grid item xs={12}>
          <Comments slug={slug}/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default BlogPage