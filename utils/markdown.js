export const getTitle = content => /#(.*)/g.exec(content)[1];

export const sanitizePost = post => /\*{5}\n(.*)/s.exec(post)[1];

