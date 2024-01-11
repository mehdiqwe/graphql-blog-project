import { gql } from "@apollo/client"

const GET_BLOGS_INFO = gql`
    query {
        posts {
            author {
                name,
                avatar {
                    url
                }
            }
            title,
            slug,
            id,
            coverPhoto {
                url
            }
        }
    }
`

const GET_AUTHORS_INFO = gql`
    query {
        authors {
            avatar {
                url
            }
            id
            name
            slug
        }
    }
`

const GET_AUTHOR_INFO = gql`
    query get_info($slug: String!){
        author(where: {slug: $slug}) {
            avatar {
                url
            }
            description {
                html
            }
            field
            name
            posts {
                coverPhoto {
                    url
                }
                id
                slug
                title
            }
        }
    }
`

const GET_BLOG_INFO = gql`
    query get_blog($slug: String!) {
        post(where: {slug: $slug}) {
            author {
                avatar {
                    url
                }
                name
                field
            }
            content {
                html
            }
            coverPhoto {
                url
            }
            title
        }
    }
`

const GET_POST_COMMENTS = gql`
    query get_post_comment($slug: String!) {
        comments(where: {post: {slug: $slug}}) {
            id
            name
            text
        }
    }
`

export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO, GET_BLOG_INFO, GET_POST_COMMENTS}