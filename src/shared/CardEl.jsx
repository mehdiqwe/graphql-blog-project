import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const CardEl = ({ post }) => {
  const { title, slug, coverPhoto, author } = post

  return (
    <Card sx={{ boxShadow: "rgba(0 0 0 / 0.1) 8px 4px 12px", borderRadius: 4 }}>
      {author && <CardHeader
        avatar={
          <Avatar src={author.avatar.url} />
        }
        title={
          <Typography component="p" variant="p" color="text.secondary" sx={{ marginRight: "8px" }} fontWeight={500}>
            {author.name}
          </Typography>
        }
      />}
      <CardMedia
        component="img"
        height="180"
        image={coverPhoto.url}
        alt={slug}
      />
      <CardContent>
        <Typography component="h3" variant="h6" color="text.primary" fontWeight={600}>
          {title}
        </Typography>
      </CardContent>
      <Divider light sx={{ marginBlock: "10px" }} />
      <CardActions>
        <Link to={`/blogs/${slug}`} style={{ textDecoration: "none", width: "100%" }}>
          <Button variant="outlined" size="small" sx={{ width: "100%", borderRadius: 3 }}>
            مطالعه مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default CardEl