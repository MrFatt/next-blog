import getConfig from "next/config";

const {
  publicRuntimeConfig: { backendUrl }
} = getConfig();

export const getTitle = content => /#(.*)/g.exec(content)[1];

export const sanitizePost = post => /\-{3}\n(.*)/s.exec(post)[1];

export const getMetaInfo = post => {
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

const replaceImageRefs = text => {
  const imageRegex = new RegExp(/\!\[(.*)\]\((\/static\/.*)\)/);
  let imageExecArray = imageRegex.exec(text);

  while (imageExecArray) {
    text = text.replace(
      imageExecArray[0],
      `![${imageExecArray[1]}](/${backendUrl}${imageExecArray[2]})`
    );
    imageExecArray = imageRegex.exec(text);
  }
  return text;
};

export const getPostSummary = content => {
  return content
    .slice(0, 900)
    .replace(/#(.*)/g, "")
    .replace(/!?\[(.*?)\]\((.*?)\)/g, (_, text) => text)
    .replace(/[\n#_>\[\]]/g, "")
    .replace(/\(http.*/, "")
    .trim();
};

export const formatText = text => replaceImageRefs(sanitizePost(text));
