import MyLayout from "../components/MyLayout";
import PostList from "../components/PostList";

export default () => {
  const testPostList = [
    {
      data: "2018-09-11",
      title: "Post One"
    },
    {
      data: "2018-09-12",
      title: "Post Two"
    },
    {
      data: "2018-09-13",
      title: "Post Three"
    },
    {
      data: "2018-09-14",
      title: "Post Four"
    },
    {
      data: "2018-09-15",
      title: "Post Five"
    },
  ];
  return (
    <MyLayout>
      <PostList list={testPostList} />
    </MyLayout>
  );
};
