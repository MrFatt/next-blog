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

  const categories = ["Category 1", "Category 2", "Category 4", "Category 5"];
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
        }
        .post-list-container {
          flex: 1;
        }
        .sidebar-container {
          width: 200px;
        }
      `}</style>
    </MyLayout>
  );
};
