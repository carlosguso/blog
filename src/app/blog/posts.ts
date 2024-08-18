type Post = {
    title: string;
    description: string;
    url: string;
    date: string;
};

const posts: Post[] = [
    {
        title: "My First Post",
        description: "This is my first blog post.",
        url: "/blog/2023/my-first-post",
        date: "2023-12-19",
    },
];

export default posts;