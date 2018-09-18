import MyLayout from "../components/MyLayout";
import PostList from "../components/PostList";
import SideBar from "../components/SideBar";

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
    }
  ];

  const categories = [
    { name: "Category1", count: 3 },
    { name: "Category2", count: 2 },
    { name: "Category3", count: 4 },
    { name: "Category4", count: 1 },
    { name: "Category5", count: 6 },
  ];
  return (
    <MyLayout>
      <div className="home-container">
        <PostList list={testPostList} />
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
        }
        .sidebar-container {
          width: 200px;
        }
      `}</style>
    </MyLayout>
  );
};
