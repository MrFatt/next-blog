export const getTitle = content => /#(.*)/g.exec(content)[1];

export const sanitizePost = post => /\-{3}\n(.*)/s.exec(post)[1];

export const getPostSummary = content => {
  return content
    .slice(0, 900)
    .replace(/#(.*)/g, "")
    .replace(/!?\[(.*?)\]\((.*?)\)/g, (match, text) => text)
    .replace(/[\n#_>\[\]]/g, "")
    .replace(/\(http.*/, "")
    .trim();
};
