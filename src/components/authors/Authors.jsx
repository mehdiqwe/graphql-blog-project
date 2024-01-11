import React from "react"
import { Avatar, Divider, Grid, Typography } from "@mui/material"
import { useQuery } from "@apollo/client"
import { GET_AUTHORS_INFO } from "../../graphql/queries"
import { Link } from "react-router-dom"
import Loader from "../../shared/Loader"

const Authors = () => {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO)

  if (loading) return <Loader />

  if (error) return <h3>Something went wrong...</h3>

  return (
    <Grid container sx={{ boxShadow: "rgba(0 0 0 / 0.1) 8px 4px 12px", borderRadius: 4 }}>
      {data.authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} sx={{ padding: 2 }}>
            <Link to={`/authors/${author.slug}`} style={{display: "flex", alignItems: "center", textDecoration: "none" }}>
            <Avatar src={author.avatar.url} sx={{ marginLeft: 1 }} />
            <Typography component="p" variant="p" color="text.secondary">
              {author.name}
            </Typography>
            </Link>
          </Grid>
          {index !== data.authors.length - 1 && (
            <Grid item xs={12}>
              <Divider light />
            </Grid>)}
        </React.Fragment>
      ))}
    </Grid>
  )
}

export default Authors