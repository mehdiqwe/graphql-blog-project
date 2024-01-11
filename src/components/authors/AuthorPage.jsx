import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GET_AUTHOR_INFO } from "../../graphql/queries"
import { Avatar, Grid, Typography } from "@mui/material"
import { Container } from "@mui/system"
import sanitizeHtml from "sanitize-html"
import CardEl from "../../shared/CardEl"
import Loader from "../../shared/Loader"

const AuthorPage = () => {
  const { slug } = useParams()
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug }
  })

  if (loading) return <Loader />

  if (error) return <h3>Something went wrong</h3>

  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid item xs={12} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Avatar src={data.author.avatar.url} sx={{ width: "250px", height: "250px" }} />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {data.author.name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary" mt={2}>
            {data.author.field}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(data.author.description.html) }}></div>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            مقالات {data.author.name}
          </Typography>
          <Grid container spacing={2} mt={2}>
            {data.author.posts.map(post =>
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardEl post={post} />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AuthorPage