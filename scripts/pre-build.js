const fs = require("fs");
const path = require("path");

const getTitle = content => /#(.*)/g.exec(content)[1].trim();

const getMetaInfo = post => {
  const metaContent = /(.*)\-{3}\n/s.exec(post)[1];
  const [keyRow, _, valueRow] = metaContent.split("\n");

  const keys = keyRow.replace(/\s/g, "").split("|");
  const values = valueRow.replace(/\s/g, "").split("|");

  return keys.reduce(
    (acc, cur, index) =>
      Object.assign(acc, cur ? { [cur]: values[index] } : {}),
    {}
  );
};

const postNames = fs.readdirSync(path.resolve(__dirname, "../posts"));

let summary = { posts: [], tags: [] };

postNames.map(name => {
  const content = fs.readFileSync(path.resolve(__dirname, `../posts/${name}`));
  const { tag: tagName, date } = getMetaInfo(content);
  summary.posts.push({
    key: name.replace(".md", ""),
    title: getTitle(content),
    tag: tagName,
    date
  });

  if (summary.tags.find(tag => tag.name === tagName)) {
    summary.tags.find(tag => tag.name === tagName).count++;
  } else {
    summary.tags.push({ name: tagName, count: 1 });
  }
});

fs.writeFileSync(
  path.resolve(__dirname, "../summary.json"),
  JSON.stringify(summary)
);
