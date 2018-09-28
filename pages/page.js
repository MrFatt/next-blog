import MyLayout from "../components/MyLayout";
import PostList from "../components/PostList";
import SideBar from "../components/SideBar";

export default (props) => {
  const postList = props.url.query.posts;

  const categories = [
    { name: "类别1", count: 3 },
    { name: "类别2", count: 2 },
    { name: "类别3", count: 4 },
    { name: "类别4", count: 1 },
    { name: "类别5", count: 6 },
  ];
  return (
    <MyLayout>
      <div className="home-container">
        <PostList list={postList} />
        <SideBar categories={categories} />
      </div>
      <style global jsx>{`
        .home-container {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }
        .post-list-container {
          flex: 1 auto;
          margin-right:100px;
        }
        .sidebar-container {
          min-width: 150px;
        }
      `}</style>
    </MyLayout>
  );
};
